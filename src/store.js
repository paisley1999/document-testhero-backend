import { createStore, applyMiddleware } from 'redux';
// import the root reducer
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// create an object for the default data
const defaultState = {
    language: '',
    user: ''
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;