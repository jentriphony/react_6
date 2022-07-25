import { createContext, useState } from 'react'



const AddStatus = createContext({})

export const AddStatusProvider = dataProps => {



  const [status, setStatus] = useState(false)



  const toggleStatus = () => {

    setStatus(previousStatus => !previousStatus)
    setTimeout(() => {
      setStatus(previousStatus => !previousStatus)
    }, 512)

  }


  return (

<AddStatus.Provider
 value={ {
  status: status,
  toggleStatus: toggleStatus
 } }
>



 { dataProps.children }



</AddStatus.Provider>

  )



}



export default AddStatus
