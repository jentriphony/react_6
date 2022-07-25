import { createContext, useState } from 'react'



const CartStatus = createContext({})

export const CartStatusProvider = dataProps => {



  const [status, setStatus] = useState(false)



  const toggleStatus = () => {

    setStatus(previousStatus => !previousStatus)

  }


  return (

<CartStatus.Provider
 value={ {
  status: status,
  toggleStatus: toggleStatus
 } }
>



 { dataProps.children }



</CartStatus.Provider>

  )



}



export default CartStatus
