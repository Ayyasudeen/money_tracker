const express = require('express');
const cors = require('cors');
const Transaction = require('./models/Transaction.js'); // imported the transaction model
const { default: mongoose } = require('mongoose');
const app = express()
const port = 4000
require('dotenv').config() // to access dotenv 

app.use(cors());
app.use(express.json())
app.get('/api_v1/test', (req, res) => {
  res.send('Hello World!')
})

app.post('/api_v1/transaction', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL)
    const {name, description, datetime, moneyvalue, transactype} = req.body;
    const transaction = await Transaction.create({name, description, datetime, moneyvalue, transactype}) // create a collection in the db using the Transaction Model
    res.json(transaction)
  })

app.get('/api_v1/transactions', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL)
    const transactions = await Transaction.find(); // get all the data from the Transaction collection
    res.json(transactions)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})