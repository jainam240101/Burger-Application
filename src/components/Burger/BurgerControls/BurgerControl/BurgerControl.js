import React from 'react'
import classes from './BurgerControl.module.css'

const BuildControl=(props)=>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removeindegrientshandler} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.addindegrienthandler}>More</button>
    </div>
)

export default BuildControl