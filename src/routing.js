import * as actionCreators from './actions/actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

function mapStateToProps(state) {
    return {
        language: state.language,
        user: state.user,
        api_list: state.api_list,
        api_detail: state.api_detail,
        api_info: state.api_info,
    }
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export function routing (Component) {
    return withRouter(connect(mapStateToProps, mapDispachToProps)(Component))
}