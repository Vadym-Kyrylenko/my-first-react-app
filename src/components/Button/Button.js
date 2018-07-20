import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <div className="button">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>
        );
    }
}

export default Button;