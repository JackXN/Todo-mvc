import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai';
import {BsFillTrash2Fill} from 'react-icons/bs';




function Todo() {

    return (
        <div>
        <li className='todo-item'>random</li>
        <button><AiFillCheckCircle/></button>
        <button><BsFillTrash2Fill/></button>
        </div>
    )
}

export default Todo
