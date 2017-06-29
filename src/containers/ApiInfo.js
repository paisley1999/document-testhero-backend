import React, {Component} from 'react';

import {routing} from   '../routing'
import ApiInfoComponent from '../components/apis/ApiInfoComponent'
import firebase from 'firebase'
import { config } from '../helper/firebase'

class APIINfo extends Component {
    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }
    render() {
        return (
            <div>
                <ApiInfoComponent {...this.props}/>
            </div>
        );
    }
}

export default routing(APIINfo);




