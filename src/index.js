import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import { Provider } from 'react-redux';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';

// import style css
import './css/style.css'
import APIINfo from './containers/APIINfo.js'

// import components
import Main from './containers/Main'
import ApiDetail from './containers/ApiDetail'
import AdminCreateApi from './containers/AdminCreateApi'
import NotFound from './components/shared/NotFound'

const logPageView = () => {
    ReactGA.initialize(process.env.REACT_APP_G_ANALYTICS);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};

const router = (
    <Provider store={store}>
        <Router onUpdate={logPageView} history={ history }>
            <div>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={Main}/>
                    <Route path={process.env.PUBLIC_URL + '/api/:id'} component={ApiDetail}/>
                    <Route path={process.env.PUBLIC_URL + '/create'} component={AdminCreateApi}/>
                    <Route path={process.env.PUBLIC_URL + '/info/:id'} component={APIINfo}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
registerServiceWorker();
