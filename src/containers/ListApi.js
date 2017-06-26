import React, { Component } from 'react';

import Header from '../components/shared/Header'
import ListApiContent from '../components/apis/ListApiContent'

class ListApi extends Component {
    render() {

        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header {...this.props} />
                <ListApiContent  {...this.props} />
            </div>
        );
    }
}

export default ListApi;
