import React from 'react'


var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({ style: { color: this.props.color, fontWeight: '100' } }, this.props.anyTitle)
      )
    )
  }
})

export default MyTitle
