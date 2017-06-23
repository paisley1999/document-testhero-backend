import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

import ReactGA from 'react-ga';

// import style css
import './css/style.css'

// import components
import App from './containers/App'

ReactGA.initialize(process.env.REACT_APP_G_ANALYTICS);

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

const router = (
    <Provider store={store}>
        <Router onUpdate={logPageView}>
            <div>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={App}/>
            </div>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
registerServiceWorker();
