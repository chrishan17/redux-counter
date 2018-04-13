import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App'
import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root'));
registerServiceWorker();
