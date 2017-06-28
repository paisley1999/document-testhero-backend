/**
 * Created by paisley on 6/27/2017 AD.
 */
function api_info(state = {}, action) {
    switch(action.type) {
        case 'update_api_info' :
            return action.api_info;
        default:
            return state;
    }
}
export default api_info;