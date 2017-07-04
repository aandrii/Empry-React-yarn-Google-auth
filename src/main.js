import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import App from './App.jsx';
import api from './api';


window.handleGoogleApiLoaded = () => {
    api.authorize(false, renderApp);
};

renderApp();

function renderApp() {
    ReactDOM.render(
        <HashRouter >
            <Route path='/' component={App}/>    
        </HashRouter>,
        document.getElementById('mount-point')
    );
}



