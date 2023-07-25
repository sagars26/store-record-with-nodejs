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