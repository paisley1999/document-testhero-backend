import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store, { history } from './store';

import registerServiceWorker from './registerServiceWorker';

import ReactGA from 'react-ga';

// import style css
import './css/style.css'

// import components
import Main from './containers/Main'
import ApiDetail from './containers/ApiDetail'


const logPageView = () => {
    ReactGA.initialize(process.env.REACT_APP_G_ANALYTICS);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

const router = (
    <Provider store={store}>
        <Router onUpdate={logPageView} history={ history }>
            <div>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Main}/>
                <Route path={process.env.PUBLIC_URL + '/api/:id'} component={ApiDetail}/>
            </div>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
registerServiceWorker();
