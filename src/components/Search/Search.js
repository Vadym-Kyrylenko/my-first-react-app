import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return (
            <div className="search">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            </div>
        );
    }
}

export default Search;