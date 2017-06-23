import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import language from './language';

const rootReducer = combineReducers({
    language: language,
    user: user,
    routing: routerReducer
});

export default rootReducer;