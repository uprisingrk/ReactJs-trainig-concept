import React, { Component } from 'react'

export default class ProdClassComp extends Component {
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <h1>{this.props.children}</h1>
        <ul>
               <li>{this.props.Id}</li>
               <li> {this.props.Name}</li>
               <li>{this.props.Price}</li> 
               <li>{this.props.ProdDesc}</li>      
        </ul>
      </div>
    )
  }
}
