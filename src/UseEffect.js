import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import { json } from 'react-router-dom'

export default function UseEffect() {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
      .then(res => res.data)
      .then(data => setUsers(data))
      
    },[])
  return (
    <div>
     <h1>Getting data from Axios Api</h1>
     
      {/* { users.map((user)=><li key={user.id}> {user.name}-{user.email}</li>)} */}
     
 <div className="card-container d-flex flex-row flex-wrap justify-content-start bg-secondary">
        {users.map(item => (
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
