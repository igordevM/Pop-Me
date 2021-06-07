'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app/app';
import { ErrorBoundary } from './components/errors/errorBoundary/errorBoundary';
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
                <App />
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
