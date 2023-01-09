import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';


// if(localStorage.todoSync){
//     alert("present");
// }else{
//     localStorage.todoSync="false";
//     alert("Not Present");
// }

function Login(){
    return(
        <div id="login-form">
        <form action="/result" method='post'name='login'>
            <table>
                <tr><td>Mobile:</td>
                    <td><input type="number" name="mobile" title="mobile"/></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="text" name="password" title="password"/></td>
                </tr>
            </table>
          <button type="submit" name="login" id="submit-button">Login</button>
          <br/><br/>
        <div style={{display:"none"}}>
         {localStorage.page="login"}
         <input type="text" name="todos" value={localStorage.todos} id="ttd"></input>
         <input type="text" name="todoSync" value={localStorage.todoSync} ></input>
         <input type="text" name="type" value="login" ></input>
        </div>
          <Link to="/signup">Don't Have Account Signup</Link> 
        </form>
    </div>
    )
}
export default Login;