
const express = require('express')
const app = express()

console.log("Hello from node");

app.get('/', function (req, res) {
  res.send('Hello World from Exress')
})

app.listen(3000)