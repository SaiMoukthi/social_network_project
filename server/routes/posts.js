
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 }).limit(50).populate('user', 'name avatar');
  res.json(posts);
});

router.post('/', auth, async (req, res) => {
  const { content, images } = req.body;
  const post = new Post({ user: req.user.id, content, images });
  await post.save();
  res.status(201).json(post);
});

module.exports = router;
