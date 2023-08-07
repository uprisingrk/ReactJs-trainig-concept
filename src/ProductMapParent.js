import React from 'react'
import ProductMapChild from './ProductMapChild'

export default function ProductMap() {
    const products=[
            {Id:'101', Name:'Vivo',Price:'18000'},
            {Id:'102', Name:'Samsung',Price:'22000'},
            {Id:'103', Name:'Sony',Price:'28000'}
    ]

      const ProductList = products.map(product=> <ProductMapChild key={product.Id} product={product}/>)

  return (
    <div>
         {ProductList}
    </div>
  )
}
