import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './login.css'
import { useState, useEffect } from 'react'
import Signup from './Signup'
function Login() {



    console.log("login")
    const navigate = useNavigate()
    const [shoppers, setShoppers] = useState("")
    useEffect (() => {
      fetch ("http://localhost:8000/users")
      .then(res => res.json())
      .then(res => setShoppers(res))
    }, [])

    console.log(shoppers)
      let x = Object.entries(shoppers)
      console.log(x)
     

    const [username, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [authenticate, setAuthenticate] = useState(localStorage.getItem(
        localStorage.getItem("authenticate" || false)
    ))
    const users = [{ user: "Group4", password: "moringa" }]

    function handleSubmit(e) {
        if(username == null || password == null) {
            alert ("Fields Are Required")
            return
        }
        e.preventDefault()
        const people =  shoppers.map((item) => item.first_name)
        console.log(people)
        let auth = people.find((item)=> item == username)
        if (auth  === username) {
            localStorage.setItem("authenticate", true)
            navigate("/app")
        }
        else{
            alert("Wrong credentials, Please check username")
        }
        
    }

    return (

        <>
        <div className="login-body">
          <center> <h1> Welcome To Mara Moja Shopping App </h1> </center>
          <form onSubmit={handleSubmit} className='form'>
            <div className="container">
              <label>Username : </label>
              <input type="text" placeholder="Enter Username" name="username" onChange={(e) => setUserName(e.target.value)} value={username}/>
              <label>Password : </label>
              <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button type="submit">Login</button>
              <Link to="/signup">Don't have an account? Create Account</Link>
            </div>
          </form>
        </div>
      </>
        // <div className='mainDiv'>
        // <form class="form" onSubmit={handleSubmit}>
        //     <div className="title">Welcome</div>
        //     <div className="subtitle">Let's create your account!</div>
        //     <div className="input-container ic1">
        //         <input id="firstname" className="input" type="text" placeholder=" " onChange={(e) => setUserName(e.target.value)} value={username} />
        //         <div className="cut"></div>
        //         <label for="firstname" className="placeholder">First name</label>
        //     </div>
        //     <div className="input-container ic2">
        //         <input id="lastname" className="input" type="text" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)} />
        //         <div className="cut"></div>
        //         <label for="lastname" class="placeholder">Password</label>
        //     </div>
        //     <Link to="/signup">Signup</Link>
        //     <input type="submit" class="submit" value="Submit" />
        // </form>
        // </div>
    )
}

export default Login