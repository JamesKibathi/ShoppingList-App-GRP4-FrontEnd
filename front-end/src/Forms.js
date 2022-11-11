import React from 'react'
import './tableAndForms.css'
import Table from './Table'
import { useState } from "react"
function Forms({firstState, setItems}) {
  // const [add, setAdd] = useState({
  //   name: "",
  //   description: "",
  //   quantity: "",
  //   price: ""

  // })
  const [name, setItemName] = useState("")
  const [description, setDes] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  

  function handleSubmit(e) {
    e.preventDefault()
    const allInputs={name:name,description:description,quantity:quantity,price:price}
    // e.target.reset()
    
    fetch("http://localhost:8000/items",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(allInputs)
    })
      .then((res) => res.json())
      .then(data=>{
        const newData=[...firstState,data]
        console.log(allInputs)
              setItems(updated=>newData)
              setItemName("")
              setDes("")
              setQuantity("")
              setPrice("")

      })

    .catch(error=>{
      console.log(error)
    })
    
      
      
  }

  return (
    <form id='form' onSubmit={handleSubmit}>
      
      <div className="label">

        <input type="text" className="in-data" placeholder='Item Name' onChange={(e) =>{setItemName(name=>e.target.value)}} value={name} name="name" />
      </div>
      <div className="label">

        <input type="text" className="input-data" placeholder='Quantity' onChange={(e) =>{setQuantity(quantity=>e.target.value)}}  value={quantity} name="quantity"/>
      </div>
      <div className="label">

        <input type="number" className="inputs" placeholder='Price' onChange={(e) =>{setPrice(price=>e.target.value)}}  value={price} name="price"/>
      </div>
      <div className="label">

        <input type="text" className="inputs-data" placeholder='Description'onChange={(e) => {setDes(description=>e.target.value)}}  value={description} name="description"/>
      </div>
      <button class="button-18" type='submit'>Add To List  </button>

    </form>
  )
}

export default Forms