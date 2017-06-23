import React, { Component } from 'react';
import logo from '../logo.svg';

import firebase from 'firebase'
// import { config } from '../helper/firebase'

class ListApi extends Component {
    signOut = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            // console.log("sign out success")
            localStorage.clear()
        }).catch(function(error) {
            // An error happened.
            console.log(error)
        });
    }

    render() {
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

                <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={this.signOut}>
                    SIGN OUT
                </button>
            </div>
        );
    }
}

export default ListApi;
