import React, { Component } from 'react'

export default class CarComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         model:'s11',
         carname:'Mahindra',
         manufacture:2017,
         color:'white'
      }
    }
     changeColor=()=> {
        this.setState({color:'Black'},()=>{alert('Color got modified')})
    }
  render() {
    return (
      <>
        <h1>{this.state.model}-{this.state.carname}-{this.state.manufacture}-{this.state.color} </h1> 
        <button onClick={this.changeColor}>Click ME</button>
      </>
    )
  }
}
