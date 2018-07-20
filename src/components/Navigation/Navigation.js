import React, { Component } from 'react';
import './Navigation.css';
import Search from '../Search/Search';
import Button from "../Button/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">EasyGo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">LogIn</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/changepassword" className="nav-link">Change password</Link>
                            </li>
                        </ul>

                        <Search/>

                        <Button/>

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">LogOut</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                </Router>
            </div>
        );
    }
}

export default Navigation;