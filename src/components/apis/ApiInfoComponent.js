/**
 * Created by paisley on 6/27/2017 AD.
 */
import React, {Component} from 'react';

class ApiInfoComponent extends Component {
    componentWillMount() {
        const {id} = this.props.match.params
        this.props.getApiInfo(id)
        console.log(id)
    }

    render() {
        const {api_info} = this.props
        const {
            title,
            url,
            method,
            url_params,
            data_params,
            success_response,
            sample_call,
            notes
        } = this.props.api_info
        return (
            <div className="table-details">
                <table>
                    <tr>
                        <td>
                            <h5>Title</h5>
                        </td>

                        <td>
                            <h5>{title}</h5>
                        </td>
                    </tr><tr>
                        <td>
                            <h3>URL</h3>
                        </td>

                        <td>
                            <h5>{url}</h5>
                        </td>
                    </tr><tr>
                        <td>
                            <h3>Method</h3>
                        </td>

                        <td>
                            <h5>{method}</h5>
                        </td>
                    </tr><tr>
                        <td>
                            <h3>URL Params</h3>
                        </td>

                        <td>
                            <h5>{url_params}</h5>
                        </td>
                    </tr><tr>
                        <td>
                            <h3>Data Params</h3>
                        </td>

                        <td>
                            <div dangerouslySetInnerHTML={{__html:data_params}}/>
                        </td>
                    </tr><tr>
                        <td>
                            <h3>Success Reponse</h3>
                        </td>

                        <td>
                            <div dangerouslySetInnerHTML={{__html:success_response}}/>
                        </td>
                     </tr><tr>
                         <td>
                            <h3>Sample Call</h3>
                         </td>

                        <td>
                            <div dangerouslySetInnerHTML={{__html:sample_call}}/>
                        </td>
                    </tr><tr>
                        <td>
                            <h3>Notes</h3>
                        </td>

                        <td>
                            <div dangerouslySetInnerHTML={{__html:notes}}/>
                        </td>

                        </tr>
                </table>

            </div>
        );
    }
}

export default ApiInfoComponent;
