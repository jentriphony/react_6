import classes from './Modal.module.css'

import { useContext, Fragment } from 'react'
import { createPortal } from 'react-dom'
import CartStatus from './../../context/cart-status'
import Card from './Card'
import Cart from './../Cart/Cart'



const Backdrop = dataProps => {



  return (

<div className={ classes.backdrop } onClick={ dataProps.onClick } />

  )



}

const OverlayModal = dataProps => {



  return (

<Card className={ classes.modal }>



 <Cart />



</Card>

  )



}

const Modal = dataProps => {



  const cartStatusContext = useContext(CartStatus)


  return (

<Fragment>



 { createPortal((
 <Backdrop onClick={ cartStatusContext.toggleStatus } />
 ), document.getElementById('backdrop')) }

 { createPortal((
 <OverlayModal />
 ), document.getElementById('overlay-modal')) }



</Fragment>

  )



}



export default Modal
