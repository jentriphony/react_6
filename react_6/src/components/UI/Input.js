import classes from './Input.module.css'

import { forwardRef } from 'react'



const Input = forwardRef((dataProps, ref) => {



  return (

<div className={ classes.input }>



 <label htmlFor={ dataProps.id }>
  { dataProps.labelInnerText }
 </label>

 <input
  type={ dataProps.type }
  id={ dataProps.id }
  value={ dataProps.value }
 />



</div>

  )



})



export default Input
