import React, { Component } from 'react';

import firebase from 'firebase'

class LoginForm extends Component {
    signInWithEmailAndPassword = ({email = '9pi.tutor@gmail.com', password = '111111'}) => {
        const input_email = this.modal_login_email.value
        const input_password = this.modal_login_password.value
        console.log(input_email + ' __________________ ' + input_password)

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    }

    render() {
        return (
            <div className="">
                <div className={`signup-form-control`}>
                    <i className="material-icons">mail_outline</i>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input"
                               type="email"
                               ref={(input) => this.modal_login_email = input} />
                        <label className="mdl-textfield__label">Email</label>
                    </div>
                </div>
                <div className={`signup-form-control`}>
                    <i className="material-icons">lock_outline</i>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input className="mdl-textfield__input"
                               type="password"
                               ref={(input) => this.modal_login_password = input} />
                        <label className="mdl-textfield__label">Password</label>
                    </div>
                </div>
                <div className="signup-form-control signup-submit-button-box">
                    <button onClick={this.signInWithEmailAndPassword} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored white-color">
                        SIGN IN
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginForm;
