import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import './css/style.css'

import App from './containers/App';
import LoginForm from './components/LoginForm'
// ReactDOM.render(<App />, document.getElementById('root'));

const router = (

    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={LoginForm}/>
        </div>
    </Router>

);

render(router, document.getElementById('root'));
registerServiceWorker();
