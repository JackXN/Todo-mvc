import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai';
import {BsFillTrash2Fill} from 'react-icons/bs';




function Todo( { text,todo, todos, setTodos } ) {

// Events
const deleteHandler = () => {
//Filter the state and find element that matches the element i clicked on
setTodos(todos.filter((element) => element.id !== todos.id));
console.log(todo)

}

    return (
        <div>
        <li className='todo-item'>{text}</li>
        <button><AiFillCheckCircle/></button>
        <button onClick={deleteHandler}><BsFillTrash2Fill/></button>
        </div>
    )
}

export default Todo
