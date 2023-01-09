import Todo from "./Todo";
import React from 'react'
import ReactDOM from 'react-dom'


function Todos({todos,deleteTodo}){
    let cl = []
    for(let x in todos){
        let todo = todos[x];
        if(todo.checked){
            cl.push(todo.id)
           }
        }
    console.log(cl)

    function saveTodo(e,id){
            if(e.checked){
              let todo = document.getElementById(id);
              todo.childNodes.item(0).style="text-decoration: line-through";
              todo.childNodes.item(4).style="text-decoration: line-through";

              //Updating Todos State
              let arrlen =  todos.length;
              let pos = arrlen-id;
              if(pos<0){pos=0}
              let newtodo = todos;
              newtodo[pos].checked=true;
              localStorage.todos=JSON.stringify(newtodo)
              // alert("Todo Saved")
            }else{
              let todo = document.getElementById(id);
              todo.childNodes.item(0).style="text-decoration:none";
              todo.childNodes.item(4).style="text-decoration:none";

              //Updating Todos State
              let arrlen =  todos.length;
              let pos = arrlen-id;
              if(pos<0){pos=0}
              let newtodo = todos;
              newtodo[pos].checked=false;
              localStorage.todos=JSON.stringify(newtodo)

              // alert("Todo Saved")
            }
          }

          //Checking Completed Todos
          window.onload=()=>{
            for(let x in cl){
                let id=cl[x];
                let elem = document.getElementById(id);
                let check_box = elem.getElementsByClassName("todo-check")[0];
                check_box.click()
              }
          }

   return( 
    <div id="todos">
     <h1 className="greeting">Todos</h1>
      {todos.map((d)=>
      <Todo todo={d} todos={todos} deleteTodo={deleteTodo} saveTodo={saveTodo} />)
      }
    </div>)
}
export default Todos;


