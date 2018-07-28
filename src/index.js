import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';
import './styles/index.css';
import configureStore from './store';

import registerServiceWorker from './registerServiceWorker';

let store = configureStore();

ReactDOM.render(<Provider store={store}>
	<App />
</Provider>, document.getElementById('root'));

registerServiceWorker();
