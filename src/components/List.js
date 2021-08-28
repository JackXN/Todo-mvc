import React, {useState} from 'react'
import Todo from './Todo'
import "./Styling/List.css"

function List( { todos , setTodos, todo} ) {

// console.log(todos)
    return (
<div className='list-container'>
<ul className='todo-list'>
{todos.map((todo) => (
    <Todo key={todo.id}
     text={todo.text} 
    todos={todos}
    todo={todo}
    setTodos={setTodos}/>
))}
</ul>
</div>
    )
}

export default List
