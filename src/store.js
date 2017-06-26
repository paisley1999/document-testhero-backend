import { createStore, applyMiddleware } from 'redux';
// import the root reducer
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

// create an object for the default data
const defaultState = {
    language: '',
    user: '',
    api_list: [],
    api_detail: {}
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
export const history = syncHistoryWithStore(createBrowserHistory(), store);

if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;