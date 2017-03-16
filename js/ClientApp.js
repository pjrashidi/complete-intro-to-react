import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title = 'some text' color = 'peru'/>
        <MyTitle title = 'and this stuff' color = 'mediumaquamarine' />
        <MyTitle title = 'whats this' color = 'blanchedalmond' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
