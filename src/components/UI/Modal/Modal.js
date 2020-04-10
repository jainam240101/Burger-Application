import React from 'react'
import classes from './Modal.module.css'
import Aux from '../../../hoc/Auxillary.js'
import Backdrop from '../Backdrop/Backdrop.js'

const Modal=(props)=>{
    return <Aux>
                <Backdrop show={props.show} backdrophandler={props.backdrophandler}/>
                <div className={classes.Modal}
                style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            Opacity: props.show ? '1' : '0'
                        }}>
                    {props.children}
                </div>
            </Aux>
}

export default Modal