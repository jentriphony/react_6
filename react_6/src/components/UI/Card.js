import classes from './Card.module.css'



const Card = dataProps => {



  const className = classes.card + dataProps.className ? ' ' + dataProps.className : ''


  return (

<div className={ className }>



 { dataProps.children }



</div>

  )



}



export default Card
