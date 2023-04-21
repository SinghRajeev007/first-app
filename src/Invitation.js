import React from 'react'

function Invitation(props) {
  return (
    <>
    <p>
    <p>
          
  Subject : {props.subject} </p>
  <p>To : {props.mail}</p>
  
  <p> Hi , {props.name} </p>
  
  I am having a {props.title} next Friday at my Home. Would you like to come ? It will be fun .
   Lots of people from my school are coming . 
  you know some of them - {props.friends}
  My house is behind our school , near {props.school} .
  I hope you will come and see you soon .
  <p>from ,</p>
  {props.your}

          
    </p>
    </>
  )
}

 export default Invitation