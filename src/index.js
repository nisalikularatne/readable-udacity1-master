import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store'
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter>
   </Provider> , document.getElementById('root'));
registerServiceWorker();
