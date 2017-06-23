import React, { Component } from 'react';
import $ from 'jquery'
import firebase from 'firebase'

class LoginForm extends Component {
    componentDidMount() {
        $('#txt_email').val('')
        $('#txt_password').val('')
    }

    signInWithEmailAndPassword = () => {
        // {email = '9pi.tutor@gmail.com', password = '111111'}
        const input_email = $('#txt_email').val();
        const input_password = $('#txt_password').val();
        // console.log(input_email + ' __________________ ' + input_password)

        firebase.auth().signInWithEmailAndPassword(input_email, input_password)
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
        console.log('LoginForm Component')
        return (
            <div className="">
                <div className={`signup-form-control`}>
                    <i className="material-icons">mail_outline</i>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input id="txt_email" className="mdl-textfield__input" type="email" />
                        <label className="mdl-textfield__label">Email</label>
                    </div>
                </div>
                <div className={`signup-form-control`}>
                    <i className="material-icons">lock_outline</i>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input id="txt_password" className="mdl-textfield__input" type="password" />
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
