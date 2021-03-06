import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter , Route } from 'react-router-dom'
import App from 'components/App';
import configureStore from 'store/configureStore';
const store  = configureStore();


ReactDOM.render(
    <Provider store = {store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
	</Provider>,
    document.getElementById('app'));
