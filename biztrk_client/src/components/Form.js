import React, {Component} from 'react'

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      industry: '',
      open: 0,
      close: 0,
      notes: '',
    }
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (event) => {
    this.setState(
      {[event.target.id]:event.target.value}
    )
  }
  handleSubmit(event){
    event.preventDefault()
    fetch('http://localhost:3000/companies', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(newCompany => newCompany.json())
    .then(jsonCompany => this.setState({jsonCompany, ...this.state.companies}))
    .then(this.setState({
      name: '',
      industry: '',
      open: 0,
      close: 0,
      notes: '',
    }))
    .catch(err => console.log(err))
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Company Name: </label>
        <input type="text"
          id="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <label htmlFor="industry">Industry: </label>
        <input type="text"
          id="industry"
          name="industry"
          onChange={this.handleChange}
          value={this.state.industry}
        />
        <label htmlFor="open">Open price</label>
        <input type="number"
          step="0.01"
          id="open"
          name="open"
          onChange={this.handleChange}
          value={this.state.open}
        />
        <label htmlFor="close">Close price</label>
        <input type="number"
          step="0.01"
          id="close"
          name="close"
          onChange={this.handleChange}
          value={this.state.close}
        />
        <label htmlFor="notes">Notes:</label>
        <input type="text"
          id="notes"
          name="notes"
          onChange={this.handleChange}
          value={this.state.notes}
        />
        <input type="submit" value="Add a New Company"/>
      </form>
    )
  }
}

export default Form
