import PostModel from '../models/Post.model'

// Insert one Post
export const insertPost = async (postData) => {
  return await PostModel.create(postData)
    .then(async (post) => {
      await post.save()
      return post
    })
    .catch((error) => {
      throw new Error(error.message)
    })
}

//Get all posts
export const getAllPosts = async () => {
  return await PostModel.find({})
    .then((posts) => {
      return posts
    })
    .catch((error) => {
      throw new Error(error.message)
    })
}

// Get one post
export const getOnePost = async (postId) => {
  return await PostModel.findById(postId)
    .then((post) => {
      if (post) {
        return post
      } else {
        throw new Error('Post not found')
      }
    })
    .catch((error) => {
      throw new Error(error.message)
    })
}

// Update one post
export const updatePost = async (postId, postData) => {
  return await PostModel.findByIdAndUpdate(postId, postData, {
    new: true,
  })
    .then((post) => {
      if (post) {
        return post
      } else {
        throw new Error('Post not found')
      }
    })
    .catch((error) => {
      throw new Error(error.message)
    })
}

// Delete one post
export const deletePost = async (postId) => {
  return await PostModel.findByIdAndDelete(postId)
    .then((post) => {
      if (post) {
        return post
      } else {
        throw new Error('Post not found')
      }
    })
    .catch((error) => {
      throw new Error(error.message)
    })
}

// Search post category
// export const searchPosts = async (searchTerm) => {
//   return await PostModel.find({
//     $or: [{ category: { $regex: searchTerm, $options: 'i' } }],
//   })
//     .then((posts) => {
//       return posts
//     })
//     .catch((error) => {
//       throw new Error(error.message)
//     })
// }

// Incraese post views
// export const increaseViewCount = async (postId) => {
//   await PostModel.findByIdAndUpdate(postId, { $inc: { viewCount: 1 } })
//   return await PostModel.findById(postId)
//     .then((post) => {
//       if (post) {
//         return post
//       } else {
//         throw new Error('Post not found')
//       }
//     })
//     .catch((error) => {
//       throw new Error(error.message)
//     })
// }

// Get all posts oder by most viewCount
// export const getAllPostsOrderByViewCount = async () => {
//   return await PostModel.find({})
//     .sort({ viewCount: -1 })
//     .then((posts) => {
//       return posts
//     })
//     .catch((error) => {
//       throw new Error(error.message)
//     })
// }
