import React, { useState } from "react"
import Header from "./components/Header"
import All from "./pages/All"
import Active from "./pages/Active"
import {Switch, Route} from "react-router-dom"
import Completed from "./pages/Complete"
import AddTodo from "./components/Add"
function App() {  
    const [todoList, setTodoList] = useState([]);  
    return (
        <div>
            <Header />
            <AddTodo todoList={todoList} setTodoList={setTodoList} />
            <Switch>
                <Route exact path="/">
                    <All todoList={todoList} />
                </Route>
                <Route path="/active">
                    <Active/>
                </Route>
                <Route path="/completed">
                    <Completed />
                </Route>
            </Switch>
        </div>
    )
}
export default App