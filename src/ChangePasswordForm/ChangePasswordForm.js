import React, { Component } from 'react';
import './ChangePasswordForm.css';
import FormGroup from '../FormGroup/FormGroup';

class ChangePasswordForm extends Component {
  render() {
    return (
      <div className="ChangePassword">
          <form>
              <p className="h4 text-center mb-4">Change password</p>
              <FormGroup htmlFor="lastPassword" type="password" id="lastPassword" placeholder="Enter your last password" name="Last password" />
              <FormGroup htmlFor="newPassword" type="password" id="newPassword" placeholder="Enter your new password" name="New password" />
              <FormGroup htmlFor="repeatNewPassword" type="password" id="repeatNewPassword" placeholder="Enter repeat your new password" name=" Repeat new password" />

              <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary">Change password</button>
              </div>
          </form>
      </div>
    );
  }
}

export default ChangePasswordForm;
