import React from 'react'
import TodoItem from "/home/manas/Desktop/react/todos-list/src/MyComponents/TodoItem.js";

const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin: "40px auto"
  }
  return (
    <div className="container" style ={myStyle}> 
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (<TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete}/>)
        })
      }
    </div>
  )
}

export default Todos
