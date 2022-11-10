import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './login.css'
import { useState } from 'react'
import Signup from './Signup'
function Login() {
    console.log("login")
    const navigate = useNavigate()
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
        const people = users.find(item => item.user === username)
        
        
        if (people && people.password === password) {
            localStorage.setItem("authenticate", true)
            navigate("/app")
        }
    
    }

    return (
        <div className='mainDiv'>
        <form class="form" onSubmit={handleSubmit}>
            <div className="title">Welcome</div>
            <div className="subtitle">Let's create your account!</div>
            <div className="input-container ic1">
                <input id="firstname" className="input" type="text" placeholder=" " onChange={(e) => setUserName(e.target.value)} value={username} />
                <div className="cut"></div>
                <label for="firstname" className="placeholder">First name</label>
            </div>
            <div className="input-container ic2">
                <input id="lastname" className="input" type="text" placeholder=" " value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="cut"></div>
                <label for="lastname" class="placeholder">Password</label>
            </div>
            <Link to="/signup">Signup</Link>
            <input type="submit" class="submit" value="Submit" />
        </form>
        </div>
    )
}

export default Login