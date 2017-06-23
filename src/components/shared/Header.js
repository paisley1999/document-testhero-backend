import React, { Component } from 'react';
import firebase from 'firebase'

class Header extends Component {
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
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title"/>
                    <div className="mdl-layout-spacer"/>
                    <nav className="mdl-navigation mdl-layout--large-screen-only">
                        <button
                            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                            onClick={this.signOut}>
                            SIGN OUT
                        </button>
                    </nav>
                </div>
            </header>

        );
    }
}

export default Header;
