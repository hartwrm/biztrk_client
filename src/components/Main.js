import React from 'react'
import Companies from './Companies'

function Main(props) {
  const {companies, handleDelete, handleUpdate} = props
  return(
    <div className='main'>
      <Companies
        companies={companies}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
       />
    </div>
  )
}

export default Main
