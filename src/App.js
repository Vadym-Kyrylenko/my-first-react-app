import React, { Component } from 'react';
import './App.css';
import ChangePasswordForm from "./components/ChangePasswordForm/ChangePasswordForm";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
          <ChangePasswordForm/>
      </div>
    );
  }
}

export default App;
