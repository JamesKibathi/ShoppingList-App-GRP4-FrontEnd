import React from 'react'
import './tableAndForms.css'
function Forms() {
  return (
//     <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="fname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lname">
// </form>
    <form>
      <label for="fname">Item Name</label><br></br>
      <input type="text" id='fname'></input>
      <label for="des">Description</label><br></br>
      <input type="text" id="des" placeholder='Description'></input>
    </form>
  )
}

export default Forms