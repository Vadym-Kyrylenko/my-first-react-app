import React, {Component} from 'react';
import FormGroup from '../FormGroup/FormGroup';

class RegisterForm extends Component {
    render() {
        return (
            <div className='registerForm'>
                <div className="container col-sm-6">
                    <form>
                        <p className="h4 text-center mb-4">Please complete register form!</p>

                        <FormGroup htmlFor="login" type="text" id="login" placeholder="Enter your login" name="Login"/>
                        <FormGroup htmlFor="email" type="email" id="email" placeholder="Enter your email" name="Email"/>
                        <FormGroup htmlFor="password" type="password" id="password" placeholder="Enter your password"
                                   name="Password"/>
                        <FormGroup htmlFor="firstName" type="text" id="firstName" placeholder="Enter your first name"
                                   name="First Name"/>
                        <FormGroup htmlFor="lastName" type="text" id="lastName" placeholder="Enter your last name"
                                   name="Last Name"/>
                        <FormGroup htmlFor="phoneNumber" type="text" id="phoneNumber"
                                   placeholder="Enter your phone number" name="Phone Number"/>

                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterForm;