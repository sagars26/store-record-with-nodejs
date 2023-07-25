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