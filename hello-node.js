
const express = require('express')
const app = express()

console.log("Hello from node");

app.get('/', function (req, res) {
  res.send('<h2><red>Hello World from Express <br> I am a type 3 enneagram</red></h2>')
  // res.sendFile(path.join(__dirname, 'inde.html')); *THIS IS THE SAME CODE AS SHOWN IN CLASS
  // FILE PATH UNDEFINED ERROR MESSAGE 

})

app.listen(process.env.PORT || 3000, () => console.log('server is running...'));
