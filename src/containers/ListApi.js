import React, { Component } from 'react';
import Header from '../components/shared/Header'

import firebase from 'firebase'

class ListApi extends Component {
    render() {
        const ref = firebase.database().ref('api')

        ref.on('value', function (snapshot) {
            console.log(snapshot.val())
        });

        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header/>

                <main className="mdl-layout__content">
                    <div className="page-content">
                        <p className="App-intro">
                            To get started, edit <code>src/App.js</code> and save to reload...
                        </p>
                    </div>
                </main>

            </div>
        );
    }
}

export default ListApi;
