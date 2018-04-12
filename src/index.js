import React from 'react';
import ReactDOM from 'react-dom';
import CounterContainer from './components/CounterContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CounterContainer />, document.getElementById('root'));
registerServiceWorker();
