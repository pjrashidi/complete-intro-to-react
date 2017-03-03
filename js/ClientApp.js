import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({anyTitle: 'A', color: 'peru'}),
        MyTitleFactory({anyTitle: 'B', color: 'mediumaquamarine'}),
        React.createElement(MyTitle, {anyTitle: 'C'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
