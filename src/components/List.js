import React, {useState} from 'react'
import styled from 'styled-components';
import Todo from './Todo'


function List( {todos } ) {

console.log(todos)
    return (
<div className='list-container'>
<ul className='todo-list'>
{todos.map(todo => {
    (
        <Todo/>
    )
})}

</ul>


</div>
    )
}

export default List
