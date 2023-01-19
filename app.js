const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;  

app.get('/', (req, res) => {
  res.send('Hello World This is Barry 3!')
})

console.log('in the node console');

app.listen(PORT, () => {
  console.log(`Example app listening on port ${ PORT }`)
})