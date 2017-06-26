function api_detail(state = {}, action) {
    switch(action.type) {
        case 'update_api_detail' :
            return action.api_detail;
        default:
            return state;
    }
}

export default api_detail;