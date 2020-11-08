import React, { useState } from 'react'

function AddTodo({todoList ,setTodoList}) {
    const [todoInput, setTodoInput] = useState('');
    function handleChange(e) {
		setTodoInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTodoList(prevList => [...prevList, todoInput]);
        e.target.reset();
		 console.log(todoList)
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