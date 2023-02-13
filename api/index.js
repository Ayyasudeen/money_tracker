const express = require('express');
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors());
app.use(express.json())
app.get('/api_v1/test', (req, res) => {
  res.send('Hello World!')
})

app.post('/api_v1/transaction', (req, res) => {
    res.json(req.body)
  })

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})