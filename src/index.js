import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import store from './Redux/store';
import { ConnectedRouter } from 'connected-react-router';
import history from './utils/history';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
