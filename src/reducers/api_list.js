function api_list(state = {}, action) {
    switch(action.type) {
        case 'update_api_list' :
            return action.api_list;
        default:
            return state;
    }
}

export default api_list;