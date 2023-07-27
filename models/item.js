// models/item.js
const mongoose = require('../db'); // Adjust the path if necessary

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  itemNo: { type: String, required: true, unique: true },
  itemName: { type: String, required: true },
  stockQuantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
