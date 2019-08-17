import React, {Component} from 'react'
import Input from './Input'

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
  componentWillMount(){
    if (this.props.company) {
      this.setState({
        name: this.props.company.name || '',
        industry: this.props.company.industry || '',
        open: this.props.company.open || '',
        close: this.props.company.close || '',
        notes: this.props.company.notes || '',
        id: this.props.company.id || ''
      })
    }
  }
  handleChange (event){
    this.setState(
      {[event.target.id]:event.target.value}
    )
  }
  handleSubmit(event){
    event.preventDefault()
    const company = {
      name: this.state.name,
      industry: this.state.industry,
      open: this.state.open,
      close: this.state.close,
      notes: this.state.notes
    }
    if(this.props.company) company.id =
    this.props.company.id
    this.props.handleSubmit(
      event,
      company
    )
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Company Name: </label>
        <Input type={'text'}
          id={'name'}
          name={'name'}
          placeholder={'Company Name'}
          handleChange={this.handleChange}
          value={this.state.name}
        />
        <label htmlFor="industry">Industry: </label>
        <Input type={'text'}
          id={'industry'}
          name={'industry'}
          placeholder={'Company Industry'}
          handleChange={this.handleChange}
          value={this.state.industry}
        />
        <label htmlFor="open">Open price</label>
        <Input type={'number'}
          step="0.01"
          id={'open'}
          name={'open'}
          placeholder={'Company Open'}
          handleChange={this.handleChange}
          value={this.state.open}
        />
        <label htmlFor="close">Close price</label>
        <Input type={'number'}
          step="0.01"
          id={'close'}
          name={'close'}
          placeholder={'Company Close'}
          handleChange={this.handleChange}
          value={this.state.close}
        />
        <label htmlFor="notes">Notes:</label>
        <Input type={'text'}
          id={'notes'}
          name={'notes'}
          placeholder={'Company Notes'}
          handleChange={this.handleChange}
          value={this.state.notes}
        />
        <input type='submit' value={this.props.company ? "Update company info" :"Add a New Company"}/>
      </form>
    )
  }
}

export default Form
