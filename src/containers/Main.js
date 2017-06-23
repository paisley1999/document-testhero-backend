import React, { Component } from 'react';
import firebase from 'firebase'
import { config } from '../helper/firebase'

import ListApi from './ListApi'
import LoginForm from '../components/LoginForm'
import LoadingDataComponent from '../components/shared/LoadingDataComponent'

class Main extends Component {
    state = {
        isLoading: true
    }

    componentDidMount() {
        firebase.initializeApp(config);
        this.props.getUserStatus()
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.user !== nextProps.user) {
            console.log('______________________-- ' + nextProps.user)
            this.setState({ isLoading: false })
        }
    }


    render() {
        const { isLoading } = this.state

        return (
            <div className="App">
                {
                    isLoading ?
                        <LoadingDataComponent/>
                        :
                        this.props.user !== '' && this.props.user !== 'null' ?
                            <ListApi/>
                            :
                            <LoginForm/>
                }
            </div>
        );
    }
}

export default Main;
