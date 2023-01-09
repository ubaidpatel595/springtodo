import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';

 

function Signup(){
    return(
        <div id="login-form">
        <form action="/result" method='post' name="signup">
            <table>
            <tr><td>Full Name:</td>
                    <td><input type="text" name="fullname" title="fullname"/></td>
                </tr>
                <tr><td>Mobile:</td>
                    <td><input type="number" name="mobile" title="mobile"/></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="text" name="password" title="password"/></td>
                </tr>
            </table>
        <div style={{display:"none"}}>
            {localStorage.page="signup"}
            <input type="text" name="todos" value={localStorage.todos} id="ttd"></input>
            <input type="text" name="todoSync" value={localStorage.todoSync} ></input>
            <input type="text" name="type" value="signup" ></input>
        </div>
          <button type="submit" name="login" id="submit-button">Signup</button>
          <br/><br/>
          <Link to="/login">Already Have Account Login</Link> 
        </form>
    </div>
    )
}
export default Signup;