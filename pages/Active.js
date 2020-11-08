import React from "react";
import AddTodo from '../components/Add'
function Active({todoList, setTodoList, handleComplete}) {
    return (
        <>
            <AddTodo 
                todoList={todoList} 
                setTodoList={setTodoList} />
            <div>
                <ul className='todoList'>
                    {todoList.filter(todo => todo.complete === false)
                    .map(todo => <li key={todo.id}>
                        <input type="checkbox" id={todo.id} checked={todo.complete} onChange={() => handleComplete(todo.id)} />
                        <label for={todo.id}>
                            {todo.todoInput}
                        </label>
                    </li>)}
                </ul>
            </div>
        </>
    )
}
export default Active