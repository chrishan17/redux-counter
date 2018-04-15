import React from 'react'

const Cats = ({ cats }) => {
  return (
    <React.Fragment>
      { cats.map(cat => <img alt="cat" key = {cat} src={cat} /> )}
    </React.Fragment>
  ) 
}

export default Cats