import classes from './Header.module.css'

import { useContext, Fragment } from 'react'
import CartList from './../../../context/cart-list'
import ButtonCart from './ButtonCart'




const Header = dataProps => {



  const cartListContext = useContext(CartList)


  return (

<Fragment>



 <div className={ classes['background-image'] }>
  <img src='' alt='background' />
 </div>

 <header className={ classes.header }>
  <p>
   header
  </p>

  <ButtonCart count={ cartListContext.list.length } />
 </header>



</Fragment>

  )



}



export default Header
