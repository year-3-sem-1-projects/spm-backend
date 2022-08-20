const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  viewCount: {
    type: Number,
    default: 0,
  },
})

module.exports = mongoose.model('post', PostSchema)
