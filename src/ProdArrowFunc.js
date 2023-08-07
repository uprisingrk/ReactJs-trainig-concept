import React from 'react'

export const ProdArrowFunc = (props) => {
  return (
    <div>
         <h1>Arrow Functional Component</h1>
        <ul>
            <li>{props.Id}</li>
            <li>{props.Name}</li>
            <li>{props.Price}</li>
            <li>{props.ProdDesc}</li>
        </ul>
    </div>
  )
}
