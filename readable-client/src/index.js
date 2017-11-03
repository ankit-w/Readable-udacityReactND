import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './home/index';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../src/reducers/index'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <Index/>
    </Provider>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
