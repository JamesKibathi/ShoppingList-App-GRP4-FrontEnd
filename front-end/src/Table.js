import React from 'react'
import './TableRows'
import "./tableAndForms.css"
import TableRows from './TableRows'
import Forms from './Forms'

function Table() {
  return (
    <div className='divContainer'>
        <Forms />
        
    <table class="styled-table">
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Description</th>
                    <th>Quanity</th>
                    <th>Price</th>
                    <th>Complete</th>
                </tr>
            </thead>
            <tbody>
            <tr class="active-row">
                    <td>Bread</td>
                    <td>10</td>
                    <td>5</td>
                    <td>55</td>
                    <td><input type= "checkbox"></input></td>
            </tr>
            </tbody>
            <button class="button-42">DELETE</button>
        </table>
        <button class="button-26" >Delete All</button>
      
        </div>
  )
}

export default Table