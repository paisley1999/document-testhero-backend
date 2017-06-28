import { get_user_status } from './user/userAction'
import { get_api_list, get_api_detail, add_new_api ,get_api_info} from './apis/apiAction'

export function update_user(user) {
    return {
        type: 'update_user',
        user
    }
}

export function update_api_list(api_list) {
    return {
        type: 'update_api_list',
        api_list
    }
}

export function update_api_detail(api_detail) {
    return {
        type: 'update_api_detail',
        api_detail
    }
}

export function update_api_info(api_info) {
    return {
        type: 'update_api_info',
        api_info
    }
}


//// User Action
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
export function getUserStatus() {
    return function (dispatch) {
        get_user_status(dispatch, update_user);
    }
}

//// Apis Action
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
export function getApiList() {
    return function (dispatch) {
        get_api_list(dispatch, update_api_list);
    }
}

export function getApiDetail(id) {
    return function (dispatch) {
        get_api_detail(dispatch, id, update_api_detail);
    }
}

export function createApi(api) {
    return function (dispatch) {
        add_new_api(api);
    }
}

export function getApiInfo(id) {
    return function (dispatch) {
        get_api_info(dispatch, id, update_api_info);
    }
}