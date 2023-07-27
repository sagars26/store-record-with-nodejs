const mongoose = require('../db'); 
const Item = require('./models/item');
const express = require('express');
const router = express.Router();
const Item = require('../models/item');


// Create a new item
router.post('/', async (req, res) => {
    try {
      const newItem = await Item.create(req.body);
      res.status(201).json(newItem);
    } catch (err) {
      res.status(400).json({ error: 'Failed to create the item.' });
    }
  });

  // Get all items
router.get('/', async (req, res) => {
    try {
      const items = await Item.find();
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve items.' });
    }
  });

  // Get a specific item by itemNo
router.get('/:itemNo', async (req, res) => {
    try {
      const item = await Item.findOne({ itemNo: req.params.itemNo });
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({ error: 'Item not found.' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve the item.' });
    }
  });

  // Get an item by itemName
router.get('/name/:itemName', async (req, res) => {
    try {
      const item = await Item.findOne({ itemName: req.params.itemName });
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({ error: 'Item not found.' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve the item.' });
    }
  });
  
  // Update an item by itemNo
router.put('/:itemNo', async (req, res) => {
    try {
      const updatedItem = await Item.findOneAndUpdate(
        { itemNo: req.params.itemNo },
        req.body,
        { new: true }
      );
      if (updatedItem) {
        res.status(200).json(updatedItem);
      } else {
        res.status(404).json({ error: 'Item not found.' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to update the item.' });
    }
  });
  
  // Delete an item by itemNo
  router.delete('/:itemNo', async (req, res) => {
    try {
      const deletedItem = await Item.findOneAndDelete({ itemNo: req.params.itemNo });
      if (deletedItem) {
        res.status(200).json({ message: 'Item deleted successfully.' });
      } else {
        res.status(404).json({ error: 'Item not found.' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete the item.' });
    }
  });
  
  module.exports = router;