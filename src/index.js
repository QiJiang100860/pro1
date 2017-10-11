import React from 'react';
import ReactDOM from 'react-dom';

import {
    HashRouter,
} from 'react-router-dom';

import App from './App';
import RouterFrame from './router/RouterFrame';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    (<HashRouter>
        <App>
            <RouterFrame/>
        </App>
    </HashRouter>)
    , document.getElementById('root'));
registerServiceWorker();
