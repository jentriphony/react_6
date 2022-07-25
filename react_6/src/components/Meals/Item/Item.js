import classes from './Item.module.css'

import Card from './../../UI/Card'
import Add from './Add'



const Item = dataProps => {



  const item = dataProps.item


  return (

<Card className={ classes.item }>



 <div>
  <h3>{ item.title }</h3>

  <p className={ classes.description }>
   { item.description }
  </p>

  <p className={ classes.price }>
   { `$${item.price}` }
  </p>
 </div>

 <Add item={ item } />



</Card>

  )



}



export default Item
