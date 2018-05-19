import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './utils/store.js'
ReactDOM.render(<Provider store={store}>
<Router>
        <div>
            <Route exact path="/" component={App} />
        </div>
</Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
