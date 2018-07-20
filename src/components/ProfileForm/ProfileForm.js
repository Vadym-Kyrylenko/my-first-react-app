import React, {Component} from 'react';
import FormGroup from '../FormGroup/FormGroup';

class ProfileForm extends Component {
    render() {
        return (
            <div className="profileForm">
                <div class="container col-sm-6">
                    <form>
                        <p className="h4 text-center mb-4">Please complete profile form!</p>

                        <FormGroup htmlFor="email" type="email" id="email" placeholder="Enter your email" name="Email"/>
                        <FormGroup htmlFor="firstName" type="text" id="firstName" placeholder="Enter your first name"
                                   name="First Name"/>
                        <FormGroup htmlFor="lastName" type="text" id="lastName" placeholder="Enter your last name"
                                   name="Last Name"/>
                        <FormGroup htmlFor="phoneNumber" type="text" id="phoneNumber"
                                   placeholder="Enter your phone number" name="Phone Number"/>
                        <FormGroup htmlFor="city" type="text" id="city" placeholder="Enter your phone number"
                                   name="City"/>
                        <FormGroup htmlFor="country" type="text" id="country" placeholder="Enter your phone number"
                                   name="Country"/>
                        <FormGroup htmlFor="gender" type="text" id="login" placeholder="Enter your phone number"
                                   name="Phone Number"/>
                        <FormGroup htmlFor="birthday" type="date" id="birthday" placeholder="Enter your birthday" name="Birthday"/>
                        <FormGroup htmlFor="photo" type="file" id="photo" placeholder="Upload your photo"
                                   name="Photo"/>
                        <FormGroup htmlFor="about" type="text" id="about" placeholder="Enter about" name="About"/>

                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProfileForm;