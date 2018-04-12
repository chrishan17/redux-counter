import React from 'react';
import ReactDOM from 'react-dom';
import CounterContainer from './components/CounterContainer';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers/counter'
import { Provider } from 'react-redux'

const store = createStore(reducer, { counter: 0 }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
