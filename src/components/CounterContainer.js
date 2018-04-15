import Counter from './Counter'
import { connect } from 'react-redux'
import * as actions from '../actions'

const mapStatetoProps = (state) => ({ counter: state.counter })

const mapDispatchToProps = dispatch => ({
  onIncrement() {
    dispatch(actions.increase())
  },
  onDecrement() {
    dispatch(actions.decrease())
  },
  onCounterChange(value) {
    const counter = parseInt(value || 0, 10)
    dispatch(actions.setCounter(counter))
  }
})

export default connect(mapStatetoProps, mapDispatchToProps)(Counter)
