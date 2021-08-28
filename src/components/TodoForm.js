/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import styled from 'styled-components'





const FormContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
`




function TodoForm( {setInput, todos, setTodos, input, setStatus} ) {


    //HANDLER FUNCTIONS
const handleChange = e => {
    //? Allowes me to change the value of the input
    setInput(e.target.value);
   setInput(e.target.value);
    // console.log(e.target.value);
}

    const handleSubmit = e => {
        //? prevents browser reload on form submit
        e.preventDefault();
        //Creates the objects with the required properties
        setTodos([...todos, {text:input, completed: false, id: Math.random() * 1000 }])

     //Clear the input once the form has been submitted
     setInput('');
    }

   


    

    // const handleSubmitOnEnter = e => {
    //     // if keystroke is 13 (enter) => run the handleSubmit function
    //     if(e.keyCode === 13) {
    //         handleSubmit()  }
    //     }




const statusHandler = (e) => {
    console.log(e.target.value)
    setStatus(e.target.value);
}

    return (
        <FormContainer>
        <div className='form-container'>
            <form className='todo-form' onSubmit={handleSubmit} >
        <input type='text' placeholder='Add something to your long list of things to do..' name='text' className='todo-input' onChange={handleChange} onSubmit={handleSubmit} value={input}></input>
        <select onChange={statusHandler}name='todos'>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='uncompleted'>Uncompleted</option>
        </select>
            </form>
        </div>
        </FormContainer>
    )
}

export default TodoForm


