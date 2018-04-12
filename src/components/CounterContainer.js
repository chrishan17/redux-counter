import React, { Component } from 'react'
import Counter from './Counter'
import { createStore } from 'redux'
import reducer from '../reducers/counter'
import actions from '../actions'
import connect from '../connect'

const store = createStore(reducer, { counter: 0 }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class CounterContainer extends Component {
  mapDispatchToProps() {
    return {
      onIncrement() {
        store.dispatch(actions.increase())
      },
      onDecrement() {
        store.dispatch(actions.decrease())
      },
      onCounterChange(value) {
        const counter = parseInt(value || 0, 10)
        store.dispatch(actions.setCounter(counter))
      },
    }
  }

  mapStatetoProps() {
    return {
      counter: store.getState().counter
    }
  }

  componentDidMount() {
    this.subScribe = store.subscribe(() => {
      const counter = store.getState().counter
      this.setState({ counter })
    })
  }

  componentWillUnmount() {
    this.subScribe()
  }

  render() {
    return connect(this.mapStatetoProps, this.mapDispatchToProps)(Counter)
  }
}

export default CounterContainer