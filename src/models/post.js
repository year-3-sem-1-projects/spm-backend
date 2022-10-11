import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
  {
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
    viewCount: {
      type: Number,
      default: 0,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'edited_at' },
  },
)

const Post = mongoose.model('Post', PostSchema)

export default Post

// const mongoose = require('mongoose')

// const PostSchema = new mongoose.Schema(
//   {
//     description: {
//       type: String,
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//     },
//     img: {
//       type: String,
//       required: true,
//     },
//     viewCount: {
//       type: Number,
//       default: 0,
//     },
//   },
//   {
//     versionKey: false,
//     timestamps: { createdAt: 'created_at', updatedAt: 'edited_at' },
//   },
// )

// module.exports = mongoose.model('post', PostSchema)
