import React, {Component} from 'react'
import Form from './Form'

class Company extends Component {
  state = {
    formVisible: false
  }
  toggleForm = () => {
    this.setState({formVisible: !this.state.formVisible})
  }
  handleUpdate = (event, company) => {
    this.props.handleUpdate(event, company)
    this.toggleForm()
  }
  render(){
    const {company, handleDelete, handleUpdate} = this.props
    return(
      <>
        {
          this.state.formVisible ?
          <Form
            company={company}
            handleSubmit={this.handleUpdate}
            toggleForm={this.toggleForm}
          /> :
          <div className="company">
            <h3>{company.name}</h3>
            <h4>{company.industry}</h4>
            <h5>Open price: ${company.open}</h5>
            <h5>Close price: ${company.close}</h5>
            <p>Notes: {company.notes}</p>
            <button onClick={() =>
            handleDelete(company)}>DELETE</button>
            <button onClick={this.toggleForm}>EDIT</button>
          </div>
        }
      </>
    )
  }
}

export default Company
