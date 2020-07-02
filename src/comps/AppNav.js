import React, { Component } from 'react'
import { Link } from "react-router-dom"
class AppNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a class="navbar-brand">Meir Sibhat</a>
                <form class="form-inline">
                    <Link to="/">Music</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/pixa">Pixa</Link>
                </form>
            </nav>
        )
    }
}

export default AppNav


