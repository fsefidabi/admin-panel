const express = require('express')
// const history = require('connect-history-api-fallback')
const serveStatic = require('serve-static')

const app = new express()

app.use(serveStatic(__dirname + '/dist'))
// app.use(history())

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(3000, () => console.log('connected to express server'))