import React, { Component } from 'react';
import { routing } from '../routing'

import firebase from 'firebase'
import { config } from '../helper/firebase'

class ApiDetail extends Component {
    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        const { id } = this.props.match.params
        this.props.getApiDetail(id)
    }

    render() {
        const { id } = this.props.match.params

        return (
            <div>
                {`Detail Api id :  ${id}`}
            </div>
        );
    }
}

export default routing(ApiDetail);

