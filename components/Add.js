import React, { useState } from 'react'

function AddTodo({todoList ,setTodoList}) {
    const [todoInput, setTodoInput] = useState('');
    function handleChange(e) {
		setTodoInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newTodo = {
            todoInput,
            complete: false,
            id: Date.now()
        }

        setTodoList(prevList => [...prevList, newTodo]);
        e.target.reset();
		 console.log(newTodo)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
            name='input'
            value={todoInput}
            onChange={handleChange}
            placeholder="Add details" />
            <button>Add</button>
        </form>
    )
}

export default AddTodo;