
const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const auth = require('../middleware/auth');

router.get('/:userId', auth, async (req, res) => {
  const { userId } = req.params;
  const msgs = await Message.find({ $or: [{ from: req.user.id, to: userId }, { from: userId, to: req.user.id }] }).sort({ createdAt: 1 });
  res.json(msgs);
});

router.post('/', auth, async (req, res) => {
  const { to, text } = req.body;
  const msg = new Message({ from: req.user.id, to, text });
  await msg.save();
  res.status(201).json(msg);
});

module.exports = router;
