import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from 'components/App';
import configureStore from 'components/store/configureStore';
const store  = configureStore();


ReactDOM.render(
    <Provider store = {store}>
		<App />
	</Provider>,
    document.getElementById('app'));
