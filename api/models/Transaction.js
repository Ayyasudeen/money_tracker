import { model, Schema } from "mongoose";

// we have to start with the schema 
const TransactionSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, required: true}
});

// define the model 
const TransactionModel = model('Transaction', TransactionSchema);

// To export the model
module.exports = TransactionModel; 