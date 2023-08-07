import React, { Component } from 'react'

export default class Registration extends Component {
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
      <div className="container py-8 flex "style={{ width: '60rem', height:'34.5rem'}}>
       <div className="card shadow">
        <div className="card-header p-2 h2 text-center">
            Registration 
        </div>
        <div className="card-body p-4">
            <form className="row" onSubmit={this.handleFormSubmit}>
                <div className="form-group col-lg-4">
                    <label className="form-control-label" htmlFor="form-group-input" >Product ID</label>
                    <input type='number' value={this.state.productId} onChange={this.handleProductId} className="form-control" id="form-group-input"/><br/>
                </div>
                <div className="form-group col-md-4">
                    <label className="form-control-label" htmlfor="form-group-input">Product Name</label>
                    <input type='text' value={this.state.productName} onChange={this.handleProductName} className="form-control" id="form-group-input" />
                </div>
                <div className="form-group col-lg-4">
                    <label className="form-control-label" htmlfor="form-group-input">Product Price</label>
                    <input input type='number' value={this.state.productPrice} onChange={this.handleProductPrice} className="form-control" id="form-group-input"/>
                </div>


                <div className="form-group col-lg-4">
                    <label className="form-control-label" htmlfor="form-group-input">Product Type</label>
                    <select value={this.state.productType} onChange={this.handleProductType} className="form-control">
                    <option value='select'>Select</option>
                    <option value='smartphone'>Smartphone</option>
                    <option value='laptop'>Laptop</option>
                    <option value='speaker'>BL Speaker</option>
                    </select>
                </div>
            
                <div className="form-group col-lg-2"><br/><br/>
                    <button className="btn btn-warning float-end mt-2" htmlfor="form-group-input">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
      </>
    )
  }
}
