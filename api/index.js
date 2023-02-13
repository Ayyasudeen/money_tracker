const express = require('express')
const app = express()
const port = 4000

app.get('/api/test', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})