import React from 'react'
import Form from './Form'

function Footer(props){
  return(
    <footer>
    <Form handleSubmit={props.handleSubmit} />
    </footer>
  )
}
export default Footer
