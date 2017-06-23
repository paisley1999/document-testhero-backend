import firebase from 'firebase'

export function get_user_status(dispatch, update_user) {
    return new Promise(function () {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log('LOGIN_SUCCESS ' + user.uid)
                dispatch(update_user(user.uid));
            } else {
                console.log('LOGIN_FAIL')
                dispatch(update_user(''));
            }
        });
    });
}