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
      nav("/app")
    }
    }



  return (
    <div className='mainDiv'>
    <form class="form" onSubmit={handleSubmit}>
      <div className="title">Welcome</div>
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " value={firstname} onChange={(e) =>setFirstName(e.target.value)} />
        <div className="cut"></div>
        <label for="firstname" class="placeholder">First name</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="cut"></div>
        <label for="lastname" className="placeholder">Password</label>
      </div>
      <div className="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" "  />
        <div className="cut cut-short"></div>
        <label for="email" className="placeholder">Confirm Password</label>
      </div>
      <input type="submit" className="submit" Sign-Up />
    </form>
    </div>
  )
}

export default Signup