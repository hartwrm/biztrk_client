import React, {Component} from 'react'
import Company from './Company'

function Companies(props) {
  const {companies, handleDelete, handleUpdate} = props
  return(
    <div>
      {companies.map(company => <Company key={company.id}
      company={company} handleDelete={handleDelete} handleUpdate={handleUpdate}
       />)}
    </div>
  )
}
export default Companies;
