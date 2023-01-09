import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
 


if(localStorage.authResponse){
    let authr = JSON.parse(localStorage.authResponse);
    var authmessage = authr[1];
    var authstatus = authr[0];
    if(authstatus == "success"){
        localStorage.page=""
        localStorage.authres="true";
    }
}
function Result(){
   // var authstate;
    return(
        
       <div id="login-form" style={{minWidth:"300px",paddingTop:"100px",minHeight:"180px"}}>
        <div style={{display:"none"}}>
       {setTimeout(()=>{
               // alert("loaded")
                document.getElementById("submit-button").click();
        },1200)}
       </div>

       <Link to="/">{authmessage} </Link> <br/>
       <Link id="redir" to={"/"+localStorage.page}><button id="submit-button">Go Back To Home</button> </Link>
       
        </div>
    )
}
export default Result;