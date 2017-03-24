import React from 'react'
import preload from '../public/data.json'
import ShowCard from './ShowCard.js'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preload.shows.map((show) => {
          return (
            <ShowCard
              poster={show.poster}
              title={show.title}
              year={show.year}
              description={show.description} />
          )
        })}
      </div>
    )
  }
})

export default Search
