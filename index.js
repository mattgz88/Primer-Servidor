const express = require('express')
const app = express()
const port = 2000

app.get('/petit', (req, res) => {
  res.send('Que bendiciooooon!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})