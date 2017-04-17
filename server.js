// gonna comment this file heavily since teacher isn't really explaining much

require('babel-register')
// this makes it so all our require statements have to get transpiled through babel. slows down server, but is necessary

const express = require('express')
// well known, simple web server. Can use alternatives like restify, happy, etc

const React = require('react')
const ReactDOMServer = require('react-dom/server')
// instead of reactDOM.render, we will use ReactDOMServer's render to string. This will give us a long string we can send the client as HTML

const ReactRouter = require('react-router')
const ServerRouter = ReactRouter.ServerRouter
// pulling ServerRouter out of react ReactRouter

const _ = require('lodash')
// using lodash for templating function

const fs = require('fs')
// fs reads from the file system. It's built into node

const PORT = 5050
// doesn't matter what port number you choose

const baseTemplate = fs.readFileSync('./index.html')
// reads something from the file system and "blocks" until it finishes... idk

const template = _.template(baseTemplate)
// lodash's templating function. Reads in baseTemplate and creates a templating function

const App = require('./js/App').default
// This is the app.js file we made. Since we exported with es6 export in that file but we're importing with es5 requires, we have to add the '.default' at the end. That's how you go between the two types of import/exports

const server = express()
// starts a server

server.use('/public', express.static('./public'))
// This tells express to serve things from public with "the proper headers"

server.use((req, res) => {
// for every request, use this function

  const context = ReactRouter.createServerRenderContext()
  // v4 React Router has a 2 pass server side rendering system. If it has a redirect or a 404, here's where you tell it what to do in that case. If it didn't have a redirect or 404, then it just render the right page. I know this is confusing, apparently it's well documented in React Router docs. In our app we don't have redirects or 404 so we can ignore it for now.

  const body = ReactDOMServer.renderToString(
  // Body will be a long string of our app's HTML output after its first render
    React.createElement(ServerRouter, {location: req.url, context: context},
      React.createElement(App)
    )
    // This is the "old" way of doing React that we did at the start of the course, without JSX, since this file doesn't get transpiled and Node can't read JSX.

    // If it were in JSX, it would look like this:
    // <ServerRouter location={req.url} context={context}>
    //   <App />
    // </ServerRouter>
  )

  res.write(template({body: body}))
  // This is where we use the template function (line 29), which references baseTemplate (line 26) which points to our index.html file. And then {body:body} means our body variable (the string we defined on line 47) gets placed in the spot with the <%= body %> template in index.html
  res.end()
  //this actually "sends it down"
})

console.log('listening on port', PORT)
server.listen(PORT)
//no explanation
