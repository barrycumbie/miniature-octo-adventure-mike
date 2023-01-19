const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World This is Barry 3!')
})

console.log('in the node console');

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})