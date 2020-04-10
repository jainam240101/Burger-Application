import React from 'react'
import classes from './Togglebar.module.css'

const Togglebar=(props)=>{
    return <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default Togglebar