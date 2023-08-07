import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {
   
    getProductInfo=(pid,pname)=>{
        console.log('Product Id is:', pid, 'Product Name is:', pname)
    }
  render() {
    return (
      <>
        <ChildComp getinfo={this.getProductInfo} ></ChildComp>
      </>
    )
  }
}
