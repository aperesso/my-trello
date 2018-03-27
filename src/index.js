import React from 'react';
import ReactDOM from 'react-dom';
import Tableau from './components/tableau'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './config';

ReactDOM.render(<Provider store={store}><Tableau title="My trello Web-App"/></Provider>, document.getElementById('root'));
registerServiceWorker();
