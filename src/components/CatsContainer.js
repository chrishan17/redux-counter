import React, { Component } from 'react'
import Cats from './Cats'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchUserCats } from '../actions'

class CatsContainer extends Component {
  componentDidMount() {
    this.fetchUserCats()
  }
  render() {
    const { cats } = this.props
    return <Cats cats={ cats } />
  }
  fetchUserCats() {
    const { userId, fetchUserCats} = this.props
    fetchUserCats(userId)
  }
}

const mapStateToProps = (state, { match }) => ({
  cats: state.cats,
  userId: match.params.userId
})

const mapDispatchToProps = {
  fetchUserCats
}

CatsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CatsContainer))
export default CatsContainer