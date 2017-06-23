import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

// import style css
import './css/style.css'

// import components
import App from './containers/App'

const router = (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App}/>
            </div>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
registerServiceWorker();
