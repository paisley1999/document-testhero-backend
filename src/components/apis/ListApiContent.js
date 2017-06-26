import React, { Component } from 'react';

import ApiBoxComponent from './ApiBoxComponent'

class ListApiContent extends Component {
    componentDidMount() {
        this.props.getApiList()
    }

    render() {
        console.log(this.props.api_list)
        const { api_list } = this.props

        return (
            <main className="mdl-layout__content">
                <div className="page-content">
                    <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                        <thead>
                        <tr>
                            <th className="mdl-data-table__cell--non-numeric">No.</th>
                            {/*<th className="mdl-data-table__cell--non-numeric">Id</th>*/}
                            <th className="mdl-data-table__cell--non-numeric">Title</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(api_list).map((key, index) => {
                                const api = api_list[key]

                                return(
                                    <ApiBoxComponent key={key} index={(index + 1)} id={key} api={api}/>
                                )
                            })
                        }
                        </tbody>
                    </table>

                </div>
            </main>
        );
    }
}

export default ListApiContent;
