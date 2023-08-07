import React, { Component } from 'react'

export default class ProductForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         productId:'',
         productName:'',
         productPrice:'',
         productType:'choose'
      }
    }
    handleProductId=(event)=>{
        this.setState({productId:event.target.value})
    }
    handleProductName=(event)=>{
        this.setState({productName:event.target.value})
    }
    handleProductPrice=(event)=>{
        this.setState({productPrice:event.target.value})
    }
    handleProductType=(event)=>{
        this.setState({productType:event.target.value})
    }
    handleFormSubmit=(event)=>{
        console.log(`ProductId:${this.state.productId}, ProductName: ${this.state.productName}, productPrice: ${this.state.productPrice}, ProductType: ${this.state.productType}`)
        event.preventDefault()
    }
  render() {
    return (
      <>
      <center>
      <form onSubmit={this.handleFormSubmit}>
      Product ID : <input type='number' value={this.state.productId} onChange={this.handleProductId}/><br/>
      Product Name : <input type='text' value={this.state.productName} onChange={this.handleProductName}/><br/>
      Product Price : <input type='number' value={this.state.productPrice} onChange={this.handleProductPrice}/><br/>
      Product type : <select value={this.state.productType} onChange={this.handleProductType}>
           <option value='smartphone'>Smartphone</option>
           <option value='laptop'>Laptop</option>
           <option value='speaker'>BL Speaker</option>
      </select><br/>
      <button type='submit'>Submit</button>
      </form>
      </center>
         
      </>
    )
  }
}
