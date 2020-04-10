import React from 'react'
import styles from './BurgerInegrients.module.css'
import PropTypes from 'prop-types'

const Indegrient=(props)=>{
    var indegrient=null
    switch(props.type){
        case('bread-bottom'):
            indegrient=<div className={styles.BreadBottom}></div>
        break;
        case('bread-top'):
            indegrient=(
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}></div>
                    <div className={styles.Seeds2}></div>
                </div>
            )  
        break;
        case('meat'):
                indegrient=<div className={styles.Meat}></div>
        break;
        case('cheese'):
                indegrient=<div className={styles.Cheese}></div>
        break;
        case('salad'):
                indegrient=<div className={styles.Salad}></div>
        break;
        case("bacon"):
                indegrient=<div className={styles.Bacon}></div>
        break;
        default:
            indegrient=null
        break;
    }
    return indegrient
}

Indegrient.propTypes={
    type:PropTypes.string.isRequired
}

export default Indegrient