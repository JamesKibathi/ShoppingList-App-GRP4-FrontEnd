import React from 'react'
import "./tableAndForms.css"

function TableRows({item}) {
  return (
    <tr class="active-row"key ={item.id}>
 <td>{item.name}</td>
<td>{item.description}</td>
<td>{item.quantity}</td>
<td>{item.price}</td>
<td><input type= "checkbox"></input></td>
</tr> 
  )}

  export default TableRows