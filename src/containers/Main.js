import React, { Component } from 'react';
import firebase from 'firebase'
import { config } from '../helper/firebase'

import ListApi from './ListApi'
import LoginForm from '../components/LoginForm'

class Main extends Component {
    componentDidMount() {
        firebase.initializeApp(config);
        this.props.getUserStatus()
    }

    render() {
        return (
            <div className="App">
                {
                    this.props.user !== '' ?
                        <ListApi/>
                        :
                        <LoginForm/>
                }
            </div>
        );
    }
}

export default Main;
