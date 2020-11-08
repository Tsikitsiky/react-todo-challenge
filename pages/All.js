import React from "react"
function All({todoList}) {
    return (
        <div>
            <ul>
                {todoList.map(todo => <li key={todo}>
                    <label>
                        <input type="checkbox" />
                        {todo}
                    </label>
                </li>)}
            </ul>
        </div>
    )
}
export default All