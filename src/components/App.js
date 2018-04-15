import React from 'react'
import { Provider } from 'react-redux'
import CounterContainer from './CounterContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CatsContainer from './CatsContainer'

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path='/' component={CounterContainer} />
        <Route path='/:userId' component={CatsContainer} />
      </React.Fragment>
    </Router>
  </Provider>
)

export default App