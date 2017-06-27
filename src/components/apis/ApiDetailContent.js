import React, { Component } from 'react';
import LoadingDataComponent from '../shared/LoadingDataComponent'

class ApiDetailContent extends Component {
    state = {
        isLoading: true
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.getApiDetail(id)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.api_detail !== this.props.api_detail) {
            this.setState({
                isLoading: false,
            });
        }
    }

    render() {
        const { id } = this.props.match.params
        const { api_detail } = this.props

        return (
            <div>
                {
                    this.state.isLoading ?
                        <LoadingDataComponent/>
                        :
                        <div>
                            {`Detail Api id :  ${id}`}
                            {`Detail Api Title :  ${api_detail.title}`}
                        </div>
                }
            </div>
        );
    }
}

export default ApiDetailContent;
