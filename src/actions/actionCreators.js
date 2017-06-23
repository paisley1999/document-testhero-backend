import { get_user_status } from './user/userAction'

export function update_user(user) {
    return {
        type: 'update_user',
        user
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