import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';

const store=createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
    <App /></Provider>,
  document.getElementById('root')
);

