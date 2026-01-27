const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World! This is my Website Application. It is running in a container.')
})

module.exports = app;