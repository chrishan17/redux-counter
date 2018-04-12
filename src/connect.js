import React from 'react'

const connect = (mapStateToProps, mapDispatchToProps) => {
  return (Component) => {
    return <Component {...mapStateToProps()} {...mapDispatchToProps()} />
  }
}

export default connect