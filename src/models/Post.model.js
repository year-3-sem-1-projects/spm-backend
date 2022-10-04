const mongoose = require('mongoose')

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
