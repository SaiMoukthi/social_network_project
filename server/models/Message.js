
const mongoose = require('mongoose');
const msgSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  read: { type: Boolean, default: false }
}, { timestamps: true });
module.exports = mongoose.model('Message', msgSchema);
