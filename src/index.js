import React from 'react';
import ReactDOM from 'react-dom';
import CounterContainer from './components/CounterContainer';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/counter'
import { Provider } from 'react-redux'


const logger = store => next => action => {
  console.log('before dispatch:', store.getState())
  next(action)
  console.log('after dispatch:', store.getState())
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, { counter: 0 }, composeEnhancers(applyMiddleware(
  logger,
  )))

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
