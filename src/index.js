import React from 'react';
import ReactDOM from 'react-dom';
import Tableau from './components/tableau'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Tableau/>, document.getElementById('root'));
registerServiceWorker();
