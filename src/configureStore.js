import { createStore, applyMiddleware, compose } from 'redux'
import { loadState, saveState } from './localStorage'
import app from './reducers'

const configureStore = () => {
  const logger = store => next => action => {
    console.log('before dispatch:', store.getState())
    next(action)
    console.log('after dispatch:', store.getState())
  }

  const anotherLogger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
  }

  const preloadedState = loadState()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(app, preloadedState, composeEnhancers(applyMiddleware(
    logger,
    anotherLogger
  )))

  store.subscribe(() => {
    saveState({
      counter: store.getState().counter
    })
  })

  return store
}

export default configureStore
