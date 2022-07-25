import classes from './Add.module.css'

import { useContext } from 'react'
import CartList from './../../../context/cart-list'
import AddStatus from './../../../context/add-status'



const Add = dataProps => {



  const cartListContext = useContext(CartList)

  const addStatusContext = useContext(AddStatus)



  const onSubmit = event => {

    event.preventDefault()

    cartListContext.increaseCountHandler(dataProps.item)
    addStatusContext.toggleStatus()

  }


  return (

<div className={ classes.add }>



 <form onSubmit={ onSubmit }>
  <button type='submit'>
   + add
  </button>
 </form>



</div>

  )



}



export default Add
