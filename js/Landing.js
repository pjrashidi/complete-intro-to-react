import React from 'react'
import { connect } from 'react-redux'
import {setSearchTerm} from './actionCreators'
import { Link } from 'react-router'
const { string, func } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (event) {
    this.props.dispatch(SetSearchTerm(event.target.value))
  },
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
