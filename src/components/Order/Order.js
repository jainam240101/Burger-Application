import React from 'react'
import classes from './Order.module.css'

const Order=(props)=>{
    return(
        <div className={classes.Orders}>
            <p>Indegrients:</p>
            <ul>
                <li>{props.indegirents[0]} : {props.values[0]}</li>
                <li>{props.indegirents[1]} : {props.values[1]}</li>
                <li>{props.indegirents[2]} : {props.values[2]}</li>
                <li>{props.indegirents[3]} : {props.values[3]}</li>
            </ul>
            <p>Price: <strong>USD {props.price}</strong></p>
        </div>
    )
}
export default Order