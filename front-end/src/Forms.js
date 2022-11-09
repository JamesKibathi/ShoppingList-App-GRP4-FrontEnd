import React from 'react'
import './tableAndForms.css'
function Forms() {
  function handleclick() {
    
  }

  return (
    
     
    <form className='form'>
       <div className="dropdown">
  <button className="dropbtn" onClick={handleclick()}>Types of Lists</button>

    
  <div class="dropdown-content">
    {/* This is a form */}
    <button >Weekday Shopping List</button>
    <button >Weekend Shopping List</button>
  </div>
</div> 
      <div className="label">
          
        <input type="text" className="in-data" placeholder='Item Name' />
      </div>
      <div className="label">
      
        <input type="text" className="input-data" placeholder='Description' />
      </div>
      <div className="label">
       
        <input type="text" className="inputs-data" placeholder='Quantity'  />
      </div>
      <div className="label">
       
        <input type="text" className="inputs-data" placeholder='Price' />
      </div>
      <button class="button-18" type='submit'>Add To List</button>

    </form>
  )
} 

export default Forms