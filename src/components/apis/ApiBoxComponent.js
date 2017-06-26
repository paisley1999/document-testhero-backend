import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ApiBoxComponent extends Component {
    constructor() {
        super();
        this.gotoLiveView = this.gotoLiveView.bind(this)
    }

    gotoLiveView() {
        const { id } = this.props

        this.context.router.history.push('/api/' + id);
    }

    render() {
        const {
            index,
            api } = this.props
        return (
            <tr onClick={this.gotoLiveView}>
                <td className="mdl-data-table__cell--non-numeric box-no">{index}.</td>
                <td className="mdl-data-table__cell--non-numeric">{api.title}</td>
            </tr>
        );
    }
}

ApiBoxComponent.contextTypes = {
    router: PropTypes.shape({
        history: PropTypes.object.isRequired,
    }),
};

export default ApiBoxComponent;