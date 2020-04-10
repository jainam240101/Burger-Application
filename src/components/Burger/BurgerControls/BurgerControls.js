import React from 'react'
import classes from './BurgerControls.module.css'
import BuildControl from './BurgerControl/BurgerControl.js'

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Cheese',type:'cheese'},
    {label:'Bacon',type:'bacon'},
    {label:'Meat',type:'meat'},
]

const BurgerControls=(props)=>(
    <div className={classes.BuildControls}>
        <p><strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                addindegrienthandler={()=> props.addindegrientshandler(ctrl.type)} 
                removeindegrientshandler={()=> props.removeindegrientshandler(ctrl.type)} 
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
    </div>
)

export default BurgerControls