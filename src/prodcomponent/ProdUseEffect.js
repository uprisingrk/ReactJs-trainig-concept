import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ProdUseEffect() {
    const [products,setProducts]=useState([])

    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products')
      .then(res=>res.data)
      .then(data=>setProducts(data))
    },[])
  return (
    <div>
    <div className="card-container d-flex flex-row flex-wrap justify-content-start bg-secondary">
        {products.map(item => (
          <div className="card mx-4 mb-4 shadow bg-light" style={{ width: '18rem' }} key={item.id}>
          <img className='card-img-top ' src={item.image} alt={item.title} style={{width: '60%', height: '150px', margin:'auto'  }}/>
            <div className="card-body ">
              <h5 className="card-title">{item.title}</h5>
              <ul>
                <li> Price:{item.price}</li>
                <li>Rating:{item.rating.rate}</li>
                <li>Category:{item.category}</li>
              </ul>
             
            </div>
          </div>
        ))}
      </div> 

    </div>
  )
}
