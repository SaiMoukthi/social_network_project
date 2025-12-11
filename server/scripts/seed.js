
const mongoose = require('mongoose');
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcryptjs');
const MONGO = process.env.MONGO_URI || 'mongodb://mongo:27017/social';
mongoose.connect(MONGO).then(async () => {
  console.log('Connected. Seeding...');
  await User.deleteMany({});
  await Post.deleteMany({});
  const hash = await bcrypt.hash('password', 10);
  const u = new User({ name: 'Alice', email: 'alice@example.com', password: hash, bio: 'Hello, I am Alice' });
  await u.save();
  await Post.insertMany([{ user: u._id, content: 'Hello world! This is my first post.' }]);
  console.log('Seeded user: alice@example.com / password');
  process.exit(0);
}).catch(err => { console.error(err); process.exit(1); });
