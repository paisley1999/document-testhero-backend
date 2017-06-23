import React, { Component } from 'react';
import logo from '../logo.svg';

import firebase from 'firebase'
// import { config } from '../helper/firebase'

class ListApi extends Component {
    signOut = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log("sign out success")
        }).catch(function(error) {
            // An error happened.
            console.log(error)
        });
    }

    signIn = ({email = '9pi.tutor@gmail.com', password = '111111'}) => {
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

    getUserStatus = () => {
        return new Promise(function (resolve, reject) {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    console.log('LOGIN_SUCCESS ' + user.uid)
                    resolve(user.uid);
                } else {
                    console.log('LOGIN_FAIL')
                    resolve(null);
                }
            });
        });
    }

   /* async componentDidMount() {
        try {
            const response = await this.getUserStatus();
            console.log(response)
            // this.setState({ user_id : response })
            // console.log('response ::::   ' + response)
            // console.log('user_id ::::   ' + this.state.user_id)
        } catch(error) {

        }
    }*/

    render() {
        // firebase.initializeApp(config);

        const ref = firebase.database().ref('api')
        ref.on('value', function (snapshot) {
            console.log(snapshot.val())
        });

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React !!!!!!!</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload...
                </p>

                <button style={{
                    marginRight: 5
                }} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary" onClick={this.signIn}>
                    SIGN IN
                </button>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.signOut}>
                    SIGN OUT
                </button>
            </div>
        );
    }
}

export default ListApi;
