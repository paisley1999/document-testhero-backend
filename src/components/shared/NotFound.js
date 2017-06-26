import React, { Component } from 'react';
import error from '../../images/error-page.png'

class NotFound extends Component {
    render() {
        return (
            <div>
                <img src={error} alt="#" style={{display: 'inline-block', verticalAlign: 'middle', maxHeight: '100%', maxWidth: '100%', backgroundSize: 'cover'}}/>
            </div>
        );
    }
}

export default NotFound;
