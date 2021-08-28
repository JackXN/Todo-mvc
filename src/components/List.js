import React, {useState} from 'react'
import Todo from './Todo'


function List( { todos } ) {

// console.log(todos)
    return (
<div className='list-container'>
<ul className='todo-list'>
{todos.map((todo) => (
    <Todo text={todo.text}/>
))}
</ul>
</div>
    )
}

export default List
