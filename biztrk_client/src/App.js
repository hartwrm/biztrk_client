import React, {Component} from 'react'
import Main from './components/Main'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './css/normalize.css'
import './css/skeleton.css'
import './App.css'


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
    fetch('https://git.heroku.com/biztrk.git
/companies', {
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
    fetch(`https://git.heroku.com/biztrk.git
/companies/${formInputs.id}`, {
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
  handleDelete = (deletedCompany) => {
    fetch(`https://git.heroku.com/biztrk.git
companies/${deletedCompany.id}`,{
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      const companies = this.state.companies.filter((company, index) => company.id !==deletedCompany.id)
      this.setState({companies})
    })
    .catch(err => console.log(err))
  }
  render(){
    return(
      <div className="App">
        <Nav />
      <div className="container">
        <Main
          companies={this.state.companies}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
         />
      </div>
      <Footer handleSubmit={this.handleAdd} />
    </div>
    )
  }
}
export default App;
