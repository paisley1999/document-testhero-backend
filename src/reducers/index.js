import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import language from './language';
import api_list from './api_list';
import api_detail from './api_detail';
import api_info from './api_info';

const rootReducer = combineReducers({
    language: language,
    user: user,
    api_list: api_list,
    api_detail: api_detail,
    api_info: api_info,
    routing: routerReducer
});

export default rootReducer;