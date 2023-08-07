import React from 'react'

export default function ProductFuncComp(props) {
  return (
    <div>
    <h1>Functional Component</h1>
        <ul>
            <li>{props.Id}</li>
            <li>{props.Name}</li>
            <li>{props.Price}</li>
            <li>{props.ProdDesc}</li>
        </ul>
    </div>
  )
}
