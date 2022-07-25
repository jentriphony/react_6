import classes from './ButtonCart.module.css'

import { useContext } from 'react'
import AddStatus from './../../../context/add-status'
import CartStatus from './../../../context/cart-status'



const ButtonCart = dataProps => {



  const addStatusContext = useContext(AddStatus)

  const cartStatusContext = useContext(CartStatus)

  const className = `${ classes.button }${ addStatusContext.status ? ' ' + classes.bump : '' }`


  return (

<button className={ className } onClick={ cartStatusContext.toggleStatus }>



 <i className={ classes.icon } />

 <p>cart</p>

 <div className={ classes.badge }>
  { dataProps.count }
 </div>



</button>

  )



}



export default ButtonCart
