import React, {Component} from 'react'
import Form from './Form'


class Companies extends Component{
  state = {
    companies: []
  }
  componentDidMount(){
    this.getCompanies()
  }

  getCompanies(){
    fetch("http://localhost:3000/companies")
    .then(res => res.json())
    .then(jData => this.setState({companies: jData}))
    .catch(err => console.log(err))
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
