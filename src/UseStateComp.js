import React, { useState } from 'react'

export default function UseStateComp() {
    //const [count,setCount]=useState(0)
    const [data,setData]=useState({name:'', age:'',email:''})
  return (
    <div>
    {/* <h2>Click {count} times</h2>
    <button onClick={()=>setCount(count+1)}>Click Here</button> */}
    <h2>Name: {data.name}</h2>
    <h2>Age: {data.age}</h2>
    <h2>Email: {data.email}</h2>
    <input type='text' placeholder='Enter Name' id='name'/><br/>
    <input type='text' placeholder='Enter Age' id='age'/><br/>
    <input type='email' placeholder='Enter Email' id='email'/><br/>
    <button onClick={()=>setData({
        name:document.getElementById("name").value,
        age:document.getElementById("age").value,
        email:document.getElementById("email").value,
    })}>Submit</button>



    </div>
  )
}
