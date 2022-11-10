import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './signup.css'
function Signup() {
  const  nav = useNavigate()
  const [firstname, setFirstName] = useState(null)
  const [password, setPassword] = useState(null)
  const [authenticate, setAuthenticate] = useState(localStorage.getItem(
    localStorage.getItem("authenticate" || false)
  ))

  function handleSubmit(event) {
    if (firstname == null || password == null) {
      alert("You missed something")
      return
    }
    
    else {
    event.preventDefault()
      localStorage.getItem ("authenticate", true)
      alert("Account created successfully.Proceed to Login")
      nav("/")
    }
    }
     // Testing merge conflict 
   
  

  return (

    <>
      <div className="login-body">
        <center> <h1> Welcome To Shopping App </h1> </center>
        <form onSubmit={handleSubmit} className='form'>
          <div className="container">
            <label>First Name : </label>
            <input  type="text" placeholder="Enter Firstname" name="username" />
            <label>Last Name : </label>
            <input  type="text" placeholder="Enter Lastname" name="username" />
            <label>Username : </label>
            <input type="text" placeholder="Enter Username" name="username" value={firstname} onChange={(e) =>setFirstName(e.target.value)} />
            <label>Email : </label>
            <input type="text" placeholder="Enter Your Email" name="username" />
            <label>Password : </label>
            <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </>
    // <div className='mainDiv'>
    // <form class="form" onSubmit={handleSubmit}>
    //   <div className="title">WELCOME</div>
    //   <div className="subtitle">Let's create your account!</div>
    //   {/* t.string "first_name"
    // t.string "last_name"
    // t.string "email"
    // t.string "user_name"
    // t.string "password" */}

    //   <div className="input-container ic1">
    //     <input id="firstname" className="input" type="text" placeholder=" " value={firstname} onChange={(e) =>setFirstName(e.target.value)} />
    //     <div className="cut"></div>
    //     <label for="firstname" class="placeholder">First name</label>
    //   </div>
    //   <div className="input-container ic2">
    //     <input id="lastname" className="input" type="text" placeholder=" "  />
    //     <div className="cut"></div>
    //     <label for="lastname" className="placeholder">Last Name</label>
    //   </div>
    //   <div className="input-container ic2">
    //     <input id="lastname" className="input" type="email" placeholder=" " />
    //     <div className="cut"></div>
    //     <label for="lastname" className="placeholder">Email</label>
    //   </div>
    //   <div className="input-container ic2">
    //     <input id="lastname" className="input" type="text" placeholder=" "/>
    //     <div className="cut"></div>
    //     <label for="lastname" className="placeholder">Username</label>
    //   </div>
    //   <div className="input-container ic2">
    //     <input id="lastname" className="input" type="text" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)} />
    //     <div className="cut"></div>
    //     <label for="lastname" className="placeholder">Password</label>
    //   </div>
    //   <input type="submit" className="submit" Sign-Up />
    // </form>
    // </div>
  )
}

export default Signup