import React, { Component } from 'react';
import { routing } from '../routing'

import firebase from 'firebase'
import { config } from '../helper/firebase'

import ApiDetailContent from '../components/apis/ApiDetailContent'

class ApiDetail extends Component {
    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }

    render() {
        return (
            <div>
                <ApiDetailContent {...this.props}/>
            </div>
        );
    }
}

export default routing(ApiDetail);

