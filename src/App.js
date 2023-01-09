import './App.css';
import NewTodo from './NewTodo';
import React from 'react'
import ReactDOM from 'react-dom'
import Todos from './Todos';
import { useState } from 'react';


function App() {
  if(localStorage.todos){
    var arr = JSON.parse(localStorage.todos)
  }else{
    arr = [
      {
        id:"1",
        title:"No Todos",
        desc:"No Todos created yet you an create it form right side",
        checked:false,
      }
    ]
    localStorage.todos=JSON.stringify(arr);
  }  
 
  const [todos,setTodos] = useState(arr);
    
function deleteTodo(id){
  let arrlen =  todos.length;
  let pos = arrlen-id;
  if(pos<0){pos=0}
    setTodos(todos.filter((item, index) => index !== pos));
    
    let newTodo = todos.slice(pos+1);
    //console.log(newTodo)
    localStorage.todos=JSON.stringify(newTodo)
    
}
 

return(
    <>
    <Todos todos={todos} deleteTodo={deleteTodo}/>
    <NewTodo todos={todos} setTodos={setTodos}/>
    </>
)
}

export default App;
