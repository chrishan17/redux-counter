const actions = {
  increase() {
    return {
      type: 'INCREMENT'
    }
  },
  decrease() {
    return {
      type: 'DECREMENT'
    }
  },
  setCounter(value) {
    return {
      type: 'SET_COUNTER',
      counter: value
    }
  }
}

export default actions