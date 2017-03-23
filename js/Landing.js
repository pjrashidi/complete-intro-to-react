import React from 'react'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>Vidja</h1>
        <input type='text' placeholder='Search' />
        <a>or Browse All</a>
      </div>
    )
  }
})

export default Landing
