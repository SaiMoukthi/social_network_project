
const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  images: [String],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, content: String, createdAt: Date }]
}, { timestamps: true });
module.exports = mongoose.model('Post', postSchema);
