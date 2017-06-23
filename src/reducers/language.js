function language(state = {}, action) {
    switch(action.type) {
        case 'update_language' :
            return action.language;
        default:
            return state;
    }
}

export default language;