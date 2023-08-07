import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import UseContextSec from './UseContextSec';

export const ProductContext = React.createContext();
export const UserContext = React.createContext();


export default function UseContextFirst() {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setProducts(res.data))

    },[])

  return (
    <div>
    <ProductContext.Provider value={products}>
    <UseContextSec/>
    </ProductContext.Provider>

    </div>
  )
}
