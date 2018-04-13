const counter = function(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'SET_COUNTER':
      return action.counter
    default:
      return state
  }
}

export default counter