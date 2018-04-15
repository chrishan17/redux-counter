import { createStore, applyMiddleware, compose } from 'redux'
import app from './reducers'
import promiseMiddleware from 'redux-promise'

const configureStore = () => {
  const logger = store => next => action => {
    console.log('before dispatch:', store.getState())
    let result = next(action)
    console.log('after dispatch:', store.getState())
    console.log(result)
    return result
  }

  const anotherLogger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    console.log(result)
    return result
  }

  // const myPormise = store => next => action => {
  //   console.log('%c It is promise time', 'color: red')
  //   if (typeof action.then === 'function') {
  //     action.then(value => {
  //       return next(value)
  //     })
  //   } else {
  //     return next(action)
  //   }
  // }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(app, composeEnhancers(applyMiddleware(
    promiseMiddleware,
    logger,
    anotherLogger
  )))

  return store
}

export default configureStore
