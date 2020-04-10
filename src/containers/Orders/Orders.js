import React,{ Component }  from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-order.js'

class Orders extends Component{
    state={
        orders:[]
    }
    componentWillMount(){
        axios.get('/order.json')
        .then(result=>{
            let fetchedorders=[]
            for(var key in result.data){
                fetchedorders.push({
                    ...result.data[key],
                    id:key
                })
            }
            this.setState({orders:fetchedorders})
        })
        .catch(error=>{
            console.log("Error",error)
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.orders.map(order=>{
                        // console.log(order.summary.indegrients)
                        const indegirents=Object.keys(order.summary.indegrients)
                        const indegirentsvalues=Object.values(order.summary.indegrients)
                        console.log(indegirents )  
                        console.log(indegirentsvalues)  
                        return (<Order key={order.id} 
                            indegirents={indegirents}
                            values={indegirentsvalues}
                            price={order.summary.price} />)
                    })
                }
            </div>
        )
    }
}

export default Orders