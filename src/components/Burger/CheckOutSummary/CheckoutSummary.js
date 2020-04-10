import React from 'react'
import classes from './CheckoutSummary.module.css'
import Burger from '../Burger.js'
import Button from '../../UI/Buttons/Button.js'

const CheckoutSummary=(props)=>{
    return(
        <div className={classes.CheckoutSummary}>
            <h1 className={classes.heading}>We Hope You Like The Burger!</h1>
            <div className={classes.burger}>
            <Burger indegrients={props.indegrients} />
            </div>
            <div className={classes.btn} >
                <Button btntype="Success" clicked={props.continuehandler}>Contine</Button>
                <Button btntype="Danger" clicked={props.deletehandler}>Cancel</Button>
            </div>
        </div>
    )
}
export default CheckoutSummary