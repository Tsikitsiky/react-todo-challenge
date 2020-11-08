import React from "react"
import {Link} from "react-router-dom"
function Header() {
    return (
        <header>
            <h1>#todo</h1>
            <ul>
                <li><Link to="/">All</Link></li>
                <li><Link to="/active">Active</Link></li>
                <li><Link to="/completed">Completed</Link></li>
            </ul>
        </header>
    )
}
export default Header