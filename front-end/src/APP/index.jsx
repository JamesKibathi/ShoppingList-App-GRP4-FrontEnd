import { BrowserRouter,Routes,Route } from "react-router-dom";
 import App from "./../App"
 import Signup  from "./../Signup";
 import Login from "./../Login"
 import Table from "./../Table";

const APP=()=>{
  return <BrowserRouter>
    <Routes >
    <Route path="" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/app" element={<App/>} />
    </Routes>
  </BrowserRouter>
}


export default APP