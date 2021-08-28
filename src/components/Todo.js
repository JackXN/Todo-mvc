import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai';
import {BsFillTrash2Fill} from 'react-icons/bs';




function Todo( { text } ) {

    return (
        <div>
        <li className='todo-item'>{text}</li>
        <button><AiFillCheckCircle/></button>
        <button><BsFillTrash2Fill/></button>
        </div>
    )
}

export default Todo
