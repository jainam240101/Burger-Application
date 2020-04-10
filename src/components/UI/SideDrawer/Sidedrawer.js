import React from 'react'
import classes from './Sidedrawer.module.css'
import Logo from '../Logo/Logo.js'
import Navigation from '../Navigation/Navigation.js'
import Backdrop from '../Backdrop/Backdrop.js'
import Aux from '../../../hoc/Auxillary.js'

const Sidedrawer=(props)=>{
    let attachedclasses=[classes.Sidedrawer,classes.Close]
    if(props.open){
        attachedclasses=[classes.Sidedrawer,classes.Open]
    }
    return <Aux>
                <Backdrop show={props.open} backdrophandler={props.close} />
                <div className={attachedclasses.join(' ')}>
                    <div className={classes.Logo}>
                        <Logo/>
                    </div>
                    <nav>
                        <Navigation/>
                    </nav>
                </div>
            </Aux>
}

export default Sidedrawer