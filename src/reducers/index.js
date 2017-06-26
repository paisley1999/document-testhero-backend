import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import language from './language';
import api_list from './api_list';
import api_detail from './api_detail';

const rootReducer = combineReducers({
    language: language,
    user: user,
    api_list: api_list,
    api_detail: api_detail,
    routing: routerReducer
});

export default rootReducer;