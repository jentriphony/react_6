import classes from './Item.module.css'



const Item = dataProps => {



  const item = dataProps.item


  const removeHandler = () => {

    dataProps.onReduceCount(item)

  }

  const addHandler = () => {

    dataProps.onIncreaseCount(item)

  }


  return (

<li className={ classes.item }>



 <h2>{ item.title }</h2>

 <div className={ classes.summary }>
  <p className={ classes.price }>
   { `$${ item.price }` }
  </p>

  <p className={ classes.count }>
   { item.count }
  </p>
 </div>

 <div className={ classes.actions }>
  <button onClick={ removeHandler }>
   -
  </button>

  <button onClick={ addHandler }>
   +
  </button>
 </div>



</li>

  )



}



export default Item
