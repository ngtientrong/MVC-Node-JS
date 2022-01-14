const express = require('express')
const app = express()
const port = 3000
const {math, loghoang} = require('./applicationlog')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
    math()
    loghoang()
    return res.send("abc")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

