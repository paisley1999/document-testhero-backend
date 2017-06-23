function user(state = {}, action) {
    switch(action.type) {
        case 'update_user' :
            return action.user;
        default:
            return state;
    }
}

export default user;