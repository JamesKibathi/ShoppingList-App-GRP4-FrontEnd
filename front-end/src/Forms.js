import React from 'react'
import './tableAndForms.css'
import Table from './Table'
import { useState } from "react"
function Forms(firstState, setItems) {
  // const [add, setAdd] = useState({
  //   name: "",
  //   description: "",
  //   quantity: "",
  //   price: ""

  // })
  const [add, setAdd] = useState("")
  const [des, setDes] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
    
  
  

  function handleSubmit(e) {
    e.preventDefault()
    
    e.target.reset()
    
    fetch("http://localhost:8000/items", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        add: add,
        des: des,
        quantity: quantity,
        price: price

      })
    })
      .then((res) => res.json())
      .then((res) => setItems(res))
      
      
  }

  return (
    <form id='form' onSubmit={handleSubmit}>
      <div className="dropdown">
        <button className="dropbtn" >Types of Lists</button>


        <div class="dropdown-content">
          {/* This is a form */}
          <button >Weekday Shopping List</button>
          <button >Weekend Shopping List</button>
        </div>
      </div>
      <div className="label">

        <input type="text" className="in-data" placeholder='Item Name' onChange={(e) =>setAdd(e.target.value)} value={add} />
      </div>
      <div className="label">

        <input type="text" className="input-data" placeholder='Quantity' onChange={(e) =>setDes(e.target.value)}  value={des} />
      </div>
      <div className="label">

        <input type="text" className="inputs-data" placeholder='Price' onChange={(e) =>setQuantity(e.target.value)}  value={quantity} />
      </div>
      <div className="label">

        <input type="text" className="inputs-data" placeholder='Description'onChange={(e) => setPrice(e.target.value)}  value={price} />
      </div>
      <button class="button-18" type='submit'>Add To List  </button>

    </form>
  )
}

export default Forms