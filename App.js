import React, { useState } from "react"
import Header from "./components/Header"
import All from "./pages/All"
import Active from "./pages/Active"
import {Switch, Route} from "react-router-dom"
import Completed from "./pages/Complete"
import AddTodo from "./components/Add"
function App() {  
    const [todoList, setTodoList] = useState([]);  
    function handleComplete(id) {
        const newTodoList = todoList.map(todo => {
			if (todo.id === id) {

				return {
					...todo,
					complete: !todo.complete
				};
			}
			return todo;
		});
        setTodoList(newTodoList);
        console.log(todoList)
    }
    return (
        <div>
            <Header />
            <AddTodo 
                todoList={todoList} 
                setTodoList={setTodoList} />
            <Switch>
                <Route exact path="/">
                    <All 
                        todoList={todoList} 
                        setTodoList={setTodoList} 
                        handleComplete={handleComplete} />
                </Route>
                <Route path="/active">
                    <Active 
                        todoList={todoList} 
                        setTodoList={setTodoList} 
                        handleComplete={handleComplete} />
                </Route>
                <Route path="/completed">
                    <Completed 
                        todoList={todoList} 
                        setTodoList={setTodoList} 
                        handleComplete={handleComplete}  />
                </Route>
            </Switch>
        </div>
    )
}
export default App