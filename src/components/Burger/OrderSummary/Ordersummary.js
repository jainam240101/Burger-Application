import React from 'react'
import Aux from '../../../hoc/Auxillary.js'
import Button from '../../UI/Buttons/Button.js'

const OrderSummary=(props)=>{
    const indegrients = Object.keys(props.indegrients)
                        .map(igKey=>{
                        return <li key={igKey}>
                            <span style={{textTransform:"capitalize" , fontWeight:"bold"}}>{igKey}</span>:{props.indegrients[igKey]}
                        </li>
                        })
    return <Aux> 
                <p>Your Order Summary is:</p>
                <ul>
                    {indegrients}
                </ul>
                <strong>Total Price : {props.total_price.toFixed(2)}</strong>
                <br/>
                <Button btntype="Success" clicked={props.purchasecontinue}>Continue</Button>
                <Button btntype="Danger" clicked={props.purchasecancel}>Cancel</Button>
            </Aux>
}

export default OrderSummary