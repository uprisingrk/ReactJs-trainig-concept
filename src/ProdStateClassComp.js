import React, { Component } from 'react'

export default class ProdStateClassComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {  
            Product:{
            Id:'101',
            Name:'Vivo',
            Price: '19000',
            Desc: 'Vivo S1 Pro'
            }
      }
    }
    changePrice=()=>{
        this.setState({Product: {...this.state.Product, Price: '20000',Id: '102' }}   );
    }
  render() {
    return (
      <>
        <table border={2}>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>DESC</th>
        </tr>
        <tr>
            <th>{this.state.Product.Id}</th>
            <th>{this.state.Product.Name}</th>
            <th>{this.state.Product.Price}</th>
            <th>{this.state.Product.Desc}</th>
        </tr>

        </table>
        <button onClick={this.changePrice} >Click to change Price</button>
      </>
    )
  }
}
