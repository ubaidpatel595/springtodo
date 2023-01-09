import React from 'react'
import ReactDOM from 'react-dom'

function updateontodo(gettodos){
//Update Online Todos
 if(localStorage.user){
    let mobile = JSON.parse(localStorage.user).mobile;
    let password = JSON.parse(localStorage.user).password;
    let params = `mobile=${mobile}&password=${password}&type=login&todoSync=true&todos=${JSON.stringify(gettodos)}`;
    let ajax = new XMLHttpRequest();
    ajax.open("post","/result");
    ajax.setRequestHeader("content-type","application/x-www-form-urlencoded")
    ajax.send(`${params}`)
    ajax.onload=()=>{
        console.log(ajax.responseText)
     //   alert("Loaded");
    }
}else{
    console.log("user not logged")
}

}

function NewTodo({todos,setTodos}){
    return(
      
        <div id="new-todo">
            <h1 className="greeting">Add Todos</h1>
            <div id="todo-form">
                <form onSubmit={
                (e)=>{
               e.preventDefault(); 
               let id = todos.length+1;
               let title = document.getElementById("newtitle").value;
               let desc = document.getElementById("newdesc").value;

               let todo = [
                {
                    id:id,
                    title:title,
                    desc:desc,
                    
                }
               ]
               let todoAdd = [...todo,...todos]
               setTodos(todoAdd)  
               updateontodo(todoAdd);
               localStorage.todos = JSON.stringify(todoAdd)           
                }

                }>
                Title:- <input  type="text" id="newtitle" required/><br/>
                Desc:- <input type="text" id="newdesc" required/><br/><br/>
                <button type="submit">Add todo</button> 
                </form> 
            </div>
        </div>
    )

}
export default NewTodo;