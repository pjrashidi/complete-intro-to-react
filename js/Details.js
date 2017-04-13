import React from 'react'
import { connect } from 'react-redux'
import { getOMDBData } from './actionCreators'
import Header from './Header'
const {shape, string, func} = React.PropTypes

const Details = React.createClass({
  propTypes: {
    show: shape({
      poster: string,
      title: string,
      year: string,
      trailer: string,
      description: string,
      imdbID: string
    }),
    omdbData: shape({
      imdbRating: string
    }),
    dispatch: func
  },
  componentDidMount () {
    if (!this.props.omdbData.imdbRating) {
      this.props.dispatch(getOMDBData(this.props.show.imdbID))
    }
  },
  render () {
    const { poster, title, year, trailer, description } = this.props.show
    let rating
    if (this.props.omdbData.imdbRating) {
      rating = <h3>{this.props.omdbData.imdbRating}</h3>
    } else {
      rating = <img src='../public/img/loading.png' alt='loading indicator' />
    }
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>{year}</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
})

const mapStateToProps = (state, ownProps) => {
  var omdbData = state.omdbData[ownProps.show.imdbID] || {}
  return {
    omdbData: omdbData
  }
}

export default connect(mapStateToProps)(Details)
