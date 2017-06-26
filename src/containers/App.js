import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';
import { withRouter } from 'react-router-dom'

function mapStateToProps(state) {
    return {
        language: state.language,
        user: state.user,
        api_list: state.api_list,
        api_detail: state.api_detail,
    }
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(Main));