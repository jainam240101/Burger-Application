import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem.js'
import classes from './Navigation.module.css'

const Navigation=(props)=>{
    return <ul className={classes.Navigation}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Order</NavigationItem>
    </ul>
}

export default Navigation