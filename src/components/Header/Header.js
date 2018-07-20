import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Navigation from "../Navigation/Navigation";

class Header extends Component {
    render() {
        return (
            <div className="header">
            <Navigation/>
            </div>
        );
    }
}

export default Header;