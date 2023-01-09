import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';

function Main(){
    if(localStorage.authres){
      if(localStorage.authres=="true"){
        return(
            <>
              <div id="login-icon">
                    <Link to='/logout'>
                      <img src='images/logout.png' />
                    </Link>
                    <br/>Logout 
              </div>
              <Link to="/"><h1 className="greeting"> Welcome To Todos Book </h1></Link> 
            </>)}else{
               return(
                <>
                <div id="login-icon">
                      <Link to='/login'>
                        <img src='images/login.png' />
                      </Link>
                <br/>Login To See Todos 
                <br/>on multiple devices 
                </div>
                <Link to="/"><h1 className="greeting"> Welcome To Todos Book </h1></Link> 
              </>)
            }
    }else{
            return(
              <>
              <div id="login-icon">
                    <Link to='/login'>
                      <img src='images/login.png' />
                    </Link>
              <br/>Login To See Todos 
              <br/>on multiple devices 
              </div>
              <Link to="/"><h1 className="greeting"> Welcome To Todos Book </h1></Link> 
            </>)}
}
export default Main;