import React from "react";
import trashIcon from '../assets/trash.svg'

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
        <div className="complete">
            <ul className='todoList'>
                {todoList.filter(todo => todo.complete === true)
                .map(todo => <li key={todo.id} className="complete-li">
                    <div>
                        <input 
                            type="checkbox" 
                            checked={todo.complete} 
                            onChange={() => handleComplete(todo.id)} />
                        <label for={todo.id}>
                        {todo.todoInput}
                        </label>
                    </div>
                    <button className="delete" onClick={() => handleDelete(todo.id)}>
                        <img src={trashIcon} />
                    </button>
                </li>)}
            </ul>
            <button className="delete-all" onClick={deleteAll}>
                Delete All
            </button>
        </div>
    )
}
export default Completed