import React, { Component } from 'react'

export default class FormComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         email:'',
         course: 'python',
         gender: ''
      }
    }
    handleUserName=(event)=>{
        this.setState({userName:event.target.value})
    }
    handleEmail=(event)=>{
        this.setState({email:event.target.value})
    }
    handleCourse=(event)=>{
    this.setState({course:event.target.value})
    }
    handleGender=(event)=>{
        this.setState({gender:event.target.value})
    }
    handleFormSubmit=(event)=>{
        console.log(`Name : ${this.state.userName}, Email : ${this.state.email}, Gender : ${this.state.gender} Course : ${this.state.course} `)
        event.preventDefault()
    }
  render() {
    return (
      <div>
      <form onSubmit={this.handleFormSubmit}>
      UserName : <input value={this.state.userName} onChange={this.handleUserName}/> <br/>
      Email : <input value={this.state.email} onChange={this.handleEmail}/><br/>
      Gender: 
        <input type='radio' value='male' checked={this.state.gender === 'male'} onChange={this.handleGender} />Male
        <input type='radio' value='female' checked={this.state.gender === 'female'} onChange={this.handleGender} />Female
        <br />

      Course : <select value={this.state.course} onChange={this.handleCourse}>
            <option value='python'>Python</option>
            <option value='javascript'>JavaScript</option>
            <option value='reactjs'>ReactJs</option>
      </select><br/>

      <button type='submit'>Register</button>

      </form>

      </div>
    )
  }
}
