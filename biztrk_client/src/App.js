import React, {Component} from 'react'
import Companies from './components/Companies'

class App extends Component{
  state = {
    companies: [],
    formInputs: {
      name: '',
      industry: '',
      open: 0,
      close: 0,
      notes: '',
    }
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
  handleAdd = (event, formInputs) => {
    event.preventDefault()
    console.log(formInputs)
    fetch('http://localhost:3000/companies', {
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdCompany => createdCompany.json())
    .then(jsonCompany => {
      this.setState({
        companies: [jsonCompany, ...this.state.companies]
      })
    })
    .catch(err => console.log(err))
  }
  handleUpdate = (event, formInputs) => {
    event.preventDefault()
    fetch(`companies/${formInputs.id}`, {
      body: JSON.stringify(formInputs),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
      }
    })
    .then(updatedCompany => {
      this.getCompanies()
    })
    .catch(err => console.log(err))
  }
  render(){
    return(
      <div className="container">
        <Companies companies={this.state.companies} />
      </div>
    )
  }
}
export default App;
