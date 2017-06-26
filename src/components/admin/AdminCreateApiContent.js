import React, { Component } from 'react';

class AdminCreateApiContent extends Component {
    createApi = () => {
        // A post entry.
        let postData = {
            title: '',
            url: '',
            method: '',
            url_params: '',
            header_params: '',
            data_params: '',
            success_response: '',
            error_response: '',
            sample_call: '',
            notes: ''
        }

        this.props.createApi(postData)
    }

    render() {
        return (
            <div>
                Create API
                <button onClick={this.createApi} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    Button
                </button>
            </div>
        );
    }
}

export default AdminCreateApiContent;
