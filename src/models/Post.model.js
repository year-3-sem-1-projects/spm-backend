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
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  viewCount: {
    type: Number,
    default: 0,
  },
})

module.exports = mongoose.model('post', PostSchema)

// import mongoose from "mongoose";

// const { ObjectId } = mongoose.Schema.Types;
// const postSchema = new mongoose.Schema(
//   {
//     caption: {
//       type: String,
//       required: true,
//     },
//     feeling: {
//       type: String,
//       default: null,
//     },
//     pic: {
//       type: String,
//       default: null,
//     },
//     likes: [{ type: ObjectId, ref: "User" }],
//     comments: [
//       {
//         type: String,
//         postedBy: { type: ObjectId, ref: "User" },
//       },
//     ],
//     postedBy: {
//       type: ObjectId,
//       ref: "User",
//     },
//   },
//   { timestamps: true }
// );

// const Post = mongoose.model("Post", postSchema);

// export default Post;
