import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getOMDBData } from './actionCreators'
import Header from './Header'
const {shape, string, object, func} = React.PropTypes

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
    omdbData: object,
    dispatch: func
  },
  getInitialState () {
    return {
      omdbData: {}
    }
  },
  componentDidMount () {
    this.props.dispatch(getOMDBData(this.props.show.imdbID))
    axios.get(`http://www.omdbapi.com/?i=${this.props.show.imdbID}`)
      .then((response) => {
        this.setState({omdbData: response.data})
      })
      .catch((error) => console.error('axios error', error))
  },
  render () {
    const { poster, title, year, trailer, description } = this.props.show
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3>{this.state.omdbData.imdbRating}</h3>
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

const mapStateToProps = (state) => {
  return { omdbData: state.omdbData }
}

export default connect(mapStateToProps)(Details)
