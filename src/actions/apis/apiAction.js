import firebase from 'firebase'

export function get_api_list(dispatch, update_api_list) {
    // return new Promise(function () {
    //     firebase.database().ref('api').on('value', function (snapshot) {
    //         dispatch(update_api_list(snapshot.val()));
    //     })
    // });
    return firebase.database().ref('api').on('value', function (snapshot) {
        dispatch(update_api_list(snapshot.val()));
    })
}

export function get_api_detail(dispatch, id, update_api_detail) {
    return firebase.database().ref('api/' + id).on('value', function (snapshot) {
        dispatch(update_api_detail(snapshot.val()));
    })
}