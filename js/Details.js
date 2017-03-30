import React from 'react'
const {shape, string} = React.PropTypes

const Details = React.createClass({
  propTypes: {
    show: shape({
      poster: string,
      title: string,
      year: string,
      trailer: string,
      description: string
    })
  },
  render () {
    const { poster, title, year, trailer, description } = this.props.show
    return (
      <div className='details'>
        <header>
          <h1>Vidja</h1>
        </header>
        <section>
          <h1>{title}</h1>
          <h2>{year}</h2>
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

export default Details
