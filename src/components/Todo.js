import React, {useState} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai';
import {BsFillTrash2Fill} from 'react-icons/bs';
import "./Styling/Todo.css"



function Todo( { text, todo, todos, setTodos } ) {

//!Events

const deleteHandler = () => {
//Filter the state and find element that matches the element i clicked on
setTodos(todos.filter(el => el.id !== todo.id)); // Compare the element im clicking on to match the one from state
// console.log(todo)
}

const completeHandler = () => {
    setTodos(todos.map(item => {
        if(item.id === todo.id) {
            return {
                ...item, completed: !item.completed
            }

        }
        return item;
    }))
}






    return (
        <div className='todo-container'>
            {/* If the status is completed then give it a class  */}
            <div className='todo-item-container'>
        <li className={`todo-item ${todo.completed ? 'completed' : '' }`}>{text}</li>
        </div>
        <div className='button-container'>
        <button onClick={completeHandler} id='complete'><AiFillCheckCircle/></button>
        <button onClick={deleteHandler} id='trash'><BsFillTrash2Fill/></button>
        </div>
        </div>
    )
}

export default Todo
