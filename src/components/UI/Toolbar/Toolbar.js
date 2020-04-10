import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../Logo/Logo.js'
import Navigation from '../Navigation/Navigation.js'
import Togglebar from '../SideDrawer/ToggleBar/Togglebar.js'

const Toolbar=(props)=>{
    return <header className={classes.Toolbar}>
                <Togglebar clicked={props.opensidedrawerhandler} />
                <Logo height="60%"/>
                <nav>
                    <Navigation />
                </nav>
            </header>
}

export default Toolbar