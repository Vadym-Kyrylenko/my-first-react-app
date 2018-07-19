import React, { Component } from 'react';
import FormGroup from "../FormGroup/FormGroup";

class LoginForm extends Component {
  render() {
    return (
      <div class="container col-sm-6">
        <form>
            <p className="h4 text-center mb-4">Please login!</p>

          <FormGroup htmlFor="login" type="text" id="login" placeholder="Enter your login" name="Login" />
            <FormGroup htmlFor="email" type="email" id="email" placeholder="Enter your email" name="Email" />

            <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary">LogIn</button>
            </div>
        </form>
      </div>
    )
  }
}

export default LoginForm;