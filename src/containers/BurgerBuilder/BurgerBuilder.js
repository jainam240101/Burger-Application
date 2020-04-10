import React,{Component} from 'react'
import Aux from '../../hoc/Auxillary.js'
import styles from './BurgerBuilder.module.css'
import Burger from '../../components/Burger/Burger.js'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls.js'
import Modal from '../../components/UI/Modal/Modal.js'
import OrderSummary from '../../components/Burger/OrderSummary/Ordersummary.js'
import Spinner from '../../components/UI/Spinner/Spinner.js'

const INDEGRIENTS_PRICE={
    cheese:0.7,
    salad:0.4,
    bacon:0.6,
    meat:0.8
}

class BurgerBuilder extends Component{
    state={
        indegrients:{
            cheese:0,
            salad:0,
            bacon:0,
            meat:0,
        },
        total_price:4,
        purchasable:false,
        ordered:false,
        loading:false
    }

    componentDidMount(){
        console.log(this.props)
    }

    checkpurchasable=(indegrients)=>{
        var sum=0
        for (var key in indegrients){
            sum=sum+indegrients[key]
        }
        this.setState({purchasable:sum>0})
    }

    addindegirents=(type)=>{
        const oldcount=this.state.indegrients[type]
        const newcount=oldcount+1
        const presentcount={
            ...this.state.indegrients
        }
        presentcount[type]=newcount
        const oldprice=this.state.total_price
        const indegrient_price=INDEGRIENTS_PRICE[type]
        const newprice=oldprice+indegrient_price

        this.setState({
            indegrients:presentcount,
            total_price:newprice
        })
        this.checkpurchasable(presentcount)
    }

    removeindegrientshandler=(type)=>{
        const oldcount=this.state.indegrients[type]
        if(oldcount<=0){
            return 0
        }
        const newcount=oldcount-1
        const updatedcount={
            ...this.state.indegrients
        }
        updatedcount[type]=newcount
        const oldprice=this.state.total_price
        const newprice=oldprice-INDEGRIENTS_PRICE[type]
        
        this.setState({
            indegrients:updatedcount,
            total_price:newprice
        })
        this.checkpurchasable(updatedcount)
    }

    orderclicked=async()=>{
        await this.setState({ ordered:true })
    }

    removeBackdrop=()=>{
        this.setState({ordered:false})
    }

    purchasecontinue=async()=>{
        var querystring=[]
        for(var i in this.state.indegrients){
            querystring.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.indegrients[i]))
        }
        querystring.push('price='+this.state.total_price)
        querystring=querystring.join('&')
        this.props.history.push({
            pathname:'/checkout',
            search:'?'+querystring
        })
    }
    purchasecancel=()=>{
        alert("Delete")
    }

    render(){
        const disabledkeyinfo={
            ...this.state.indegrients
        }
        for(let key in disabledkeyinfo){
            disabledkeyinfo[key] = disabledkeyinfo[key<=0]
        }
        let Ordersummary=<OrderSummary indegrients={this.state.indegrients} 
                            purchasecontinue={this.purchasecontinue}
                            purchasecancel={this.purchasecancel}
                            total_price={this.state.total_price}/>
        if(this.state.loading){
            Ordersummary= <Spinner />   
        }


        return(
            <Aux>
                <Modal show={this.state.ordered} backdrophandler={this.removeBackdrop}>
                    {Ordersummary}
                </Modal>
                <div className={styles.Content}>
                    <Burger indegrients={this.state.indegrients}/>
                </div>
                <BurgerControls
                    price={this.state.total_price}
                    addindegrientshandler={this.addindegirents}
                    removeindegrientshandler={this.removeindegrientshandler}
                    purchasable={this.state.purchasable}
                    ordered={this.orderclicked}
                    disabled={disabledkeyinfo} />
            </Aux>
        )
    }
}

export default BurgerBuilder