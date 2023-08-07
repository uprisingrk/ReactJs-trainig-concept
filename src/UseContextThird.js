import React, { useContext } from 'react'
import { ProductContext, UserContext } from './UseContextFirst'


export default function UseContextThird() {
    const products= useContext(ProductContext)
  return (
    <div>

    <table className='table table-success table-striped '>
        <thead>
            <tr>
                <th>ID</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Category</th>
                <th>Image</th>
                <th>Title</th>
            </tr>
        </thead>
        <tbody>
            {
               products.map((item)=><tr key={item.id}>
                 <td>{item.id}</td>
                 <td>{item.rating.rate}</td>
                 <td>{item.price}</td>
                 <td>{item.category}</td>
                 <td><img src={item.image} alt={item.title} style={{width: '40%', height: '150px', margin:'auto'  }}/></td>
                <td>{item.title}</td>
                </tr>)
            }
        </tbody>
    </table>
   {/* <div className="card-container d-flex flex-row flex-wrap justify-content-start bg-secondary">
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
      </div>  */}
       
    </div>
  )
}
