import React from 'react'
import { Provider } from 'react-redux'
import CounterContainer from './CounterContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path='/' component={CounterContainer} />
    </Router>
  </Provider>
)

export default App