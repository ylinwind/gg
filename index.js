import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router ,hashHistory} from 'react-router';
import store from './src/store';
import {route} from './src/config/route';
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={route}></Router>
    </Provider>
    ,
    document.getElementById("box")
)