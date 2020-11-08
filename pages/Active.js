import React from "react"
function Active({todoList, setTodoList, handleComplete}) {
    // function handleComplete(id) {
    //         const newTodoList = todoList.map(todo => {
    //     		if (todo.id === id) {
    
    //     			return {
    //     				...todo,
    //     				complete: !todo.complete
    //     			};
    //     		}
    //     		return todo;
    //     	});
    //         setTodoList(newTodoList);
    //         console.log(todoList)
    //     }
    return (
        <div>
            <ul>
                {todoList.filter(todo => todo.complete === false)
                .map(todo => <li key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo.id)} />
                        {todo.todoInput}
                    </label>
                </li>)}
            </ul>
        </div>
    )
}
export default Active