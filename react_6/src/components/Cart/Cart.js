import classes from './Cart.module.css'

import { useContext, Fragment } from 'react'
import CartList from './../../context/cart-list'
import CartStatus from './../../context/cart-status'
import Item from './Item/Item'



const Cart = dataProps => {



  const cartListContext = useContext(CartList)
  const list = cartListContext.list
  const cartStatusContext = useContext(CartStatus)

  let total = 0
  list.map(item => {
    total += item.count * item.price
    return item
  })

  const list_ = list.map(item => (

<Item
 key={ item.id_ }
 item={ item }
 onReduceCount={ cartListContext.reduceCountHandler }
 onIncreaseCount={ cartListContext.increaseCountHandler }
/>

   ))


  return (

<Fragment>



 <ul className={ classes.list }>
  { list_ }
 </ul>

 <div className={ classes.total }>
  <p>total</p>

  <p>{ `$${ total }` }</p>
 </div>

 <div className={ classes.actions }>
  <button
   type='button'
   className={ classes['button-alt'] }
   onClick={ cartStatusContext.toggleStatus }
  >
   close
  </button>

  <button type='button' className={ classes.button }>
   order
  </button>
 </div>



</Fragment>

  )



}



export default Cart
