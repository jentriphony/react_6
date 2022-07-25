import { createContext, useState } from 'react'



const CartList = createContext({})

export const CartListProvider = dataProps => {



  const [list, setList] = useState([])



  const addHandler = item => {

    setList(previousList => {
      const item_ = { ...item }
      item_.id_ = 'cart_item_' + (previousList.length + 1)
      item_.count = 1
      return [
	...previousList,
	item_
      ]
    })

  }

  const increaseCountHandler = item => {

    let index = null
    if(list.find((item_, index_) => {
      const result = item_.id === item.id
      if(result) {
	index = index_
      }
      return result
    }) !== undefined) {
      setList(previousList => {
	const list_ = [
	  ...previousList
	]
	++list_[index].count
	return list_
      })
      return
    }
    addHandler(item)

  }

  const removeHandler = item => {

    setList(previousList => previousList.filter(item_ => item_.id !== item.id).map((item_, index) => {
      item_.id_ = 'cart_item_' + (index + 1)
      return item_
    }))

  }

  const reduceCountHandler = item => {

    let index = null
    if(list.find((item_, index_) => {
      const result = item_.id === item.id
      if(result) {
	index = index_
      }
      return result
    }) !== undefined) {
      if(list[index].count > 1) {
	setList(previousList => {
	  const list_ = [
	    ...previousList
	  ]
	  --list_[index].count	  
	  return list_
	})
	return
      }
      removeHandler(item)
    }

  }


  return (

<CartList.Provider
 value={ {
  list: list,
  increaseCountHandler: increaseCountHandler,
  reduceCountHandler: reduceCountHandler
 } }
>



 { dataProps.children }



</CartList.Provider>

  )



}



export default CartList
