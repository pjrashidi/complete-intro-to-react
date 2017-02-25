var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({ style: {color: this.props.color, fontWeight: '100' } },this.props.anyTitle)
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function() {
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
