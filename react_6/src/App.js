import {
  useState,
  useContext,
  Fragment
} from 'react'
import CartStatus from './context/cart-status'
//import Cart from './components/Cart/Cart'
import Modal from './components/UI/Modal'
import Header from './components/Layout/Header/Header'
import ListAvailable from './components/Meals/ListAvailable'



function App() {



  const [list, setList] = useState([

    {
      id: 'item_1',
      title: 'title_1',
      description: 'description_1',
      price: 100
    },
    {
      id: 'item_2',
      title: 'title_2',
      description: 'description_2',
      price: 200
    },
    {
      id: 'item_3',
      title: 'title_3',
      description: 'description_3',
      price: 300
    },
    {
      id: 'item_4',
      title: 'title_4',
      description: 'description_4',
      price: 400
    }

  ])



  const cartStatusContext = useContext(CartStatus)


  return (

<Fragment>



 { cartStatusContext.status === true && <Modal /> }

 <Header />

 <ListAvailable list={ list } />



</Fragment>

  )



}

export default App
