import classes from './Summary.module.css'



const Summary = dataProps => {



  return (

<div className={ classes.summary }>



 <h2>{ dataProps.innerText }</h2>



</div>

  )



}



export default Summary
