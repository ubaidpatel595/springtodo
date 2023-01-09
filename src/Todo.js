import Todos from "./Todos";
import React from 'react'
import ReactDOM from 'react-dom'
function Todo({todo,deleteTodo,saveTodo}){

// function checkstatus(){
//   let todos = document.getElementsByClassName("todo-check");
//   for(let x in todos){
//     console.log(todos[x].value)
//     saveTodo(todo[x],todos[x].value)
//   }
// }

let id = todo.id;
    return (
      <div className ="todo" id={id}>
        <p className="todo-title">Title:- {todo.title}</p>
        <input type="checkbox" name="" className='todo-check' value={id} onChange={(e)=>{saveTodo(e.target,id)}} />
        <button   onClick={()=>{deleteTodo(id)} }>Delete Todo</button><br/>
        <p className='todo-desc'>Desc:- {todo.desc}</p>
      </div>
    );
}
export default Todo;