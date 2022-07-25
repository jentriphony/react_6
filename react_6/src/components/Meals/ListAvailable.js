import classes from './ListAvailable.module.css'

import Card from './../UI/Card'
import Item from './Item/Item'



const ListAvailable = dataProps => {



  const list = dataProps.list
  const listLength = list.length


  const list_ = listLength ? list.map(item => (

<Item key={ item.id } item={ item } />

  )) : (

<li>no items</li>

  )


  return (

<Card className={ classes.list }>



 <ul>
 { list_ }
 </ul>



</Card>

  )



}



export default ListAvailable
