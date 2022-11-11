import React from 'react'
import './TableRows'
import "./tableAndForms.css"
import TableRows from './TableRows'
import Forms from './Forms'
import { useEffect, useState } from 'react';

function Table({item}) {

    const [items, setItems] = useState()
    useEffect (() => {
      fetch("http://localhost:8000/items")
      .then(res => res.json())
      .then(res => setItems(res))
    }, []) 
    function handleClick (id) {
      setItems(value => value.filter(val => id !== val.id))
      fetch(`http://localhost:8000/items/${id}`,{
      method: "DELETE"
    })
    }
  return (

  
    
    <div className='divContainer'>
        <Forms firstState={items} setItems={setItems}/>
      
    <table class="styled-table" >
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
            {items && items.map( item =>  <TableRows  key ={item.id} item={item} handleClick={handleClick}/>)}
            
            </tbody>
            
        </table>
        </div>
      
       
  )
}

export default Table