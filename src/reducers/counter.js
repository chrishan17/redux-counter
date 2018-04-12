const counter = function(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {counter: state.counter + 1}
    case 'DECREMENT':
      return {counter: state.counter - 1}
    case 'SET_COUNTER':
      return {counter: action.counter}
    default:
      return state
  }
}

export default counter