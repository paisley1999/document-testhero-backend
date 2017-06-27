import React, { Component } from 'react';
import { routing } from '../routing'

import firebase from 'firebase'
import { config } from '../helper/firebase'

import AdminCreateApiContent from '../components/admin/AdminCreateApiContent'

class AdminCreateApi extends Component {
    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }

    render() {
        return (
            <div>
                <AdminCreateApiContent {...this.props}/>
            </div>
        );
    }
}

export default routing(AdminCreateApi);
