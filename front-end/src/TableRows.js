import React from 'react'
import "./tableAndForms.css"

function TableRows({item, handleClick}) {


  return (
    <tr class="active-row"key ={item.id}>
 <td>{item.name}</td>
<td>{item.description}</td>
<td>{item.quantity}</td>
<td>{item.price}</td>
<td><input type= "checkbox" onClick={() => handleClick(item.id)}></input></td>
</tr> 
  )}

  export default TableRows