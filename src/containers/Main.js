import React, { Component } from 'react';
import { routing } from '../routing'
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
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        this.props.getUserStatus()

        if (this.props.user !== '' && this.props.user !== 'null') {
            this.setState({
                isLoading: false
            })
        }
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
                            <ListApi {...this.props} />
                            :
                            <LoginForm/>
                }
            </div>
        );
    }
}

export default routing(Main);
