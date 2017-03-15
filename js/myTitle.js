import React from 'react'


var h1 = React.DOM.h1
var div = React.DOM.div

var MyTitle = React.createClass({
  render: function () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style= { style }>
          {this.props.anyTitle}
        </h1>
      </div>
    )
  }
})

export default MyTitle
