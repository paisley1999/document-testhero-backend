import React, { Component } from 'react';

import ApiBoxComponent from './ApiBoxComponent'
import LoadingDataComponent from '../shared/LoadingDataComponent'

class ListApiContent extends Component {
    state = {
        isLoading: true
    }

    componentDidMount() {
        this.props.getApiList()
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.api_list !== nextProps.api_list) {
            this.setState({
                isLoading: false,
            });
        }
    }

    render() {
        const { api_list } = this.props

        return (
            <main className="mdl-layout__content">
                {
                    this.state.isLoading ?
                        <LoadingDataComponent/>
                        :
                        <div className="page-content">
                            <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                                <thead>
                                <tr>
                                    <th className="mdl-data-table__cell--non-numeric">No.</th>
                                    <th className="mdl-data-table__cell--non-numeric">Title</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    Object.keys(api_list).reverse().map((key, index) => {
                                        const api = api_list[key]

                                        return(
                                            <ApiBoxComponent key={key} index={(index + 1)} id={key} api={api}/>
                                        )
                                    })
                                }
                                </tbody>
                            </table>

                        </div>
                }

            </main>
        );
    }
}

export default ListApiContent;
