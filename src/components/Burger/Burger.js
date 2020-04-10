import React from 'react'
import styles from './Burger.module.css'
import BurgerIndegrient from './BurgerIndegrients/BurgerIndegrients.js'

const Burger=(props)=>{
    let transformedIndegrient=Object.keys(props.indegrients)
        .map(igkey=>{
            return[...Array(props.indegrients[igkey])].map((_,i)=>{
                return <BurgerIndegrient type={igkey} key={igkey+i} />
            })
        }).reduce((array,el)=>{
            return array.concat(el)
        },[])
    
    if(transformedIndegrient.length===0){
        transformedIndegrient= <h3>Please Add Indegrients</h3>
    }
    return(
        <div className={styles.Burger}>
            <BurgerIndegrient type="bread-top" />
            {transformedIndegrient}
            <BurgerIndegrient type="bread-bottom" />
        </div>
    )
}

export default Burger