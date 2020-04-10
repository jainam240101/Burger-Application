import React, { Component } from 'react'
import classes from './Checkoutform.module.css'
import Button from '../../../components/UI/Buttons/Button'
import axios from '../../../axios-order.js'

class Checkoutform extends Component{
    
    orderclicked=()=>{
        console.log(this.props)
        const order={
            summary:{
                indegrients:this.props.indegrients,
                price:this.props.price
            },
            address:{
                "name":"Jainam Mehta",
                "Number":7574879255,
                "Street":"Ambli"
            }
        }
        axios.post('/order.json',order)
        .then(result=>{
            console.log(result)
            this.props.history.push('/')
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render(){
        return(
            <div className={classes.Checkoutform}>
                <h4>Fill In Your Contact Details!</h4>
                <form>
                    <input className={classes.Input} type='text' name="name" placeholder="Your Name" />
                    <input className={classes.Input} type='text' name="email" placeholder="Your Name" />
                    <input className={classes.Input} type='text' name="phone" placeholder="Phone Number" />
                    <input className={classes.Input} type='text' name="address" placeholder="Street Name" />
                </form>
                <Button btntype="Success" clicked={this.orderclicked} >Order</Button>
                <Button btntype="Danger">Cancel</Button>
            </div>
        )
    }
}

export default Checkoutform
