import React, {useState} from 'react'
import Todo from './Todo'


function List( { todos , setTodos, filteredTodos} ) {

// console.log(todos)
    return (
<div className='list-container'>
<ul className='todo-list'>
{filteredTodos.map((todo) => (
    <Todo key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo}/>
))}
</ul>
</div>
    )
}

export default List
