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
        return (
            <div className="login-form">
                <div className="mdl-layout mdl-js-layout mdl-color--grey-100">
                    <main className="mdl-layout__content">
                        <div className="mdl-card mdl-shadow--6dp">
                            <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
                                <h2 className="mdl-card__title-text">9Picompany.</h2>
                            </div>
                            <div className="mdl-card__supporting-text">
                                <div className="mdl-textfield mdl-js-textfield">
                                    <input className="mdl-textfield__input" type="text" id="txt_email"/>
                                    <label className="mdl-textfield__label" for="username">Username</label>
                                </div>
                                <div className="mdl-textfield mdl-js-textfield">
                                    <input className="mdl-textfield__input" type="password" id="txt_password"/>
                                    <label className="mdl-textfield__label" for="userpass">Password</label>
                                </div>
                            </div>
                            <div className="mdl-card__actions mdl-card--border">
                                <button onClick={this.signInWithEmailAndPassword}
                                        className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                                    SIGN IN
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default LoginForm;
