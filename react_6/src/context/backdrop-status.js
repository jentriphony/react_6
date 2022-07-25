import { createContext, useState } from 'react'



const BackdropStatus = createContext({})

export const BackdropStatusProvider = dataProps => {



  const [status, setStatus] = useState(false)



  const toggleStatus = () => {

    setStatus(previousStatus => !previousStatus)

  }


  return (

<BackdropStatus.Provider
 value={ {
  status: status,
  toggleStatus: toggleStatus
 } }
>



 { dataProps.children }



</BackdropStatus.Provider>

  )



}



export default BackdropStatus
