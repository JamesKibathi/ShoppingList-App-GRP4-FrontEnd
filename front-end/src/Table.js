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
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quanity</th>
                    <th>Complete</th>
                </tr>
            </thead>
            <tbody>
                <TableRows />
            </tbody>
            <button class="button-42">DELETE</button>
        </table>
        </div>
  )
}

export default Table