import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import './signup.css'

function Signup() {
  const  nav = useNavigate()
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [user_name, setUserName] = useState("")
  const [password, setPassword] = useState("")

  //Fetch Users

  const [users, setUsers] = useState()
 
    useEffect (() => {
      fetch("http://localhost:8000/users")
      .then(res => res.json())
      .then(allUsers => {
        console.log (allUsers)
        setUsers(allUsers)})
    }, [])
// End of fetch

  function handleSubmit(event) {
    event.preventDefault()
    let objs = {first_name:first_name,last_name:last_name,email:email,user_name:user_name,password:password}

    if (first_name == null || password == null) {
      alert("You missed something")
      return
    }
    
    else {
      
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(objs)
    })
    .then((res) => res.json())
    .then(data=>{
      const newData=[...users,data]
      console.log(objs)
            setUsers(updated=>newData)
            setFirstName("")
            setLastName("")
            setEmail("")
            setUserName("")
            setPassword("")
       alert("Account created successfully.Proceed to Login")
       nav("/")

    })

    .catch(error=>{
      console.log(error)
    })

    }
  
  }
   
  return (
   
      <div className="login-body">
        <center> <h1> Create Mara Moja Account </h1> </center>
        <form onSubmit={handleSubmit} className='form'>
          <div className="container">
            <label>First Name : </label>
            <input  type="text" placeholder="Enter Firstname"  onChange={(e) =>{setFirstName(fname=>e.target.value)}} value={first_name} name="first_name"    />
            <label>Last Name : </label>
            <input  type="text" placeholder="Enter Lastname"  onChange={(e) =>{setLastName(lname=>e.target.value)}} value={last_name} name="last_name" />
            <label>Username : </label>
            <input type="text" placeholder="Enter Username" required onChange={(e) => {setUserName(username=>e.target.value)}} value={user_name} name="user_name" />
            <label>Email : </label>
            <input type="email" placeholder="Enter Your Email" required onChange={(e) =>{setEmail(email=>e.target.value)}} value={email} name="email" />
            <label>Password : </label>
            <input type="password" placeholder="Enter Password" required onChange={(e) => {setPassword(password=>e.target.value)}} value={password} name="password"  />
            <button type="submit">Sign Me Up</button>
          </div>
        </form>
      </div>
    
  )
}

export default Signup