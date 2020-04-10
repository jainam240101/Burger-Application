import React,{Component} from 'react'
import CheckoutSummary from '../../components/Burger/CheckOutSummary/CheckoutSummary.js'
import { Route } from 'react-router-dom'
import Checkoutform from './CheckoutForm/Checkoutform.js'


class Checkout extends Component{
    state={
        indegrient:null,
        total_price:0
    }
    componentWillMount(){
        const querstring=new URLSearchParams(this.props.history.location.search)
        const indegrient={}
        var price;
        for(var i of querstring.entries()){
            if(i[0]==='price'){
                price=Number(i[1])
            }
            else{
                indegrient[i[0]] = Number(i[1])
            }
        }
        this.setState({indegrient:indegrient,total_price:price})

    }

    continuehandler=()=>{
        this.props.history.push('/checkout/contact-form')
    }
    deletehandler=()=>{
        this.props.history.goBack()
    }
    render(){
        return(
            <div>
                <CheckoutSummary 
                indegrients={this.state.indegrient}
                continuehandler={this.continuehandler}
                deletehandler={this.deletehandler} />

                <Route 
                    path={this.props.match.path+'/contact-form'} 
                    render={(props)=>(<Checkoutform indegrients={this.state.indegrient} price={this.state.total_price} {...props}/>)} />
            </div>
            
        )
    }
}

export default Checkout