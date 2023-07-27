const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/recordsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


// Import the Item model (Assuming the correct path to your item model)
const Item = require('./models/item');

// Example data
const itemsData = [
  {
    itemNo: '12345',
    itemName: 'dummy ',
    stockQuantity: 100,
    price: 9.99,
  }
];

// Function to insert items into the database
async function insertItems() {
  try {
    await Item.insertMany(itemsData);
    console.log('Items inserted successfully');
  } catch (err) {
    console.error('Error inserting items:', err);
  }
}

module.exports = mongoose;
