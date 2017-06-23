import React, { Component } from 'react';
import LoadingImage from '../../images/pie.gif';

class LoadingDataComponent extends Component {
    render() {
        return (
            <div className="loading-data">
                <img className="loading-before-logo" src={LoadingImage} alt="loader"/>
                <h3 className="loading-before-logo-heading">Loading Data...</h3>
            </div>
        );
    }
}

export default LoadingDataComponent;
