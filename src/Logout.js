import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import { redirect } from "react-router-dom";
function redir(){
setTimeout(()=>{
    alert("loaded")
  //  localStorage.authres="false";
    //redirect("/")
},2000)
}


 
function Logout(){
    return(
       <div id="login-form" style={{minWidth:"300px",paddingTop:"100px",minHeight:"180px"}}>
       <Link to="/">Logout Successfull</Link> <br/>
       <Link to="/"><button id="submit-button">Go Back To Home</button> </Link>
       <div style={{display:"none"}}>
       {setTimeout(()=>{
               // alert("loaded")
                document.getElementById("submit-button").click();
                },1200)}
        {localStorage.authres="false" }
        {localStorage.removeItem("user")}
        {localStorage.removeItem("authResponse")}
        {localStorage.removeItem("todos")}
        {localStorage.removeItem("todoSync")}
       </div>
        </div>
    )
}
export default Logout;