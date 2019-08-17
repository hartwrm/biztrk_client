import React, {Component} from 'react'
import Form from './Form'


class Companies extends Component{
  state = {
    companies: []
  }

  render(){
    return(
      <div className="container">
      {
        this.state.companies.map(company => {
          return(
            <div key={company.id}>
              <h3>{company.name}</h3>
              <h4>{company.industry}</h4>
              <h5>${company.open}</h5>
              <h5>${company.close}</h5>
              <p>Notes: {company.notes}</p>
            </div>
          )
        })
      }
      <Form />
      </div>
    )
  }
}
export default Companies;
