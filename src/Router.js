/*
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
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Register</a>
                                    <Link to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">LogIn</a>
                                    <Link to="/login">LogIn</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Change password</a>
                                    <Link to="/changepassword" >Change password</Link>
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

export default Navigation;*/
