import React from 'react';
import ReactDOM from 'react-dom';
import Tableau from './components/tableau'
import './stylesheets/style.css'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './config';

ReactDOM.render(<Provider store={store}><Tableau title="My trello"/></Provider>, document.getElementById('root'));
registerServiceWorker();
