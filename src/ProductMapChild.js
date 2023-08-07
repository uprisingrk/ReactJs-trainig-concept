import React from 'react'

export default function ProductMapChild(props) {
  return (
    <div><center>
         <table border={2}>

<tr>
    <th>ID</th>
    <th>NAME</th>
    <th>PRICE</th>
</tr>
<tr>
    <th>{props.product.Id}</th>
    <th>{props.product.Name}</th>
    <th>{props.product.Price}</th>
</tr>

</table>
<br/>
</center>
    </div>
  )
}
