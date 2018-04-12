import React, { Component } from 'react'
import Counter from './Counter'
import { createStore } from 'redux'
import reducer from '../reducers/counter'
import actions from '../actions'

const store = createStore(reducer, { counter: 0 }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class CounterContainer extends Component {
  onIncrement() {
    store.dispatch(actions.increase())
  }

  onDecrement() {
    store.dispatch(actions.decrease())
  }

  onCounterChange(value) {
    const counter = parseInt(value || 0, 10)
    store.dispatch(actions.setCounter(counter))
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
    return (
      <Counter store={store.getState()} onIncrement={this.onIncrement} onDecrement={this.onDecrement} onCounterChange={this.onCounterChange}/>
    )
  }
}

export default CounterContainer