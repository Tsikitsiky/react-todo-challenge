import React from "react";

function Completed({todoList, setTodoList, handleComplete}) {
    function handleDelete(id) {
        const newList = todoList.filter(todo => todo.id !== id)
        setTodoList(newList);
    }

    function deleteAll() {
        const newList = todoList.filter(todo => todo.complete === false);
        setTodoList(newList);
    }
    return (
        <div>
            <ul>
                {todoList.filter(todo => todo.complete === true)
                .map(todo => <li key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo.id)} />
                        {todo.todoInput}
                    </label>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </li>)}
            </ul>
            <button onClick={deleteAll}>Delete All</button>
        </div>
    )
}
export default Completed