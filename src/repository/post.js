import Post from '../models/post'
import User from '../models/user'

export const addOnePost = async (postContent) => {
  const post = await new Post(postContent).save()
  if (!post) return null
  console.log('repository', post)
  return post
}

export const deleteOnePost = async ({ post_id }) => {
  console.log('repository', post_id)
  const post = await Post.deleteOne({ post_id })
  if (!post) return null
  console.log('repository', post)
  return post
}

export const updatePostRepository = async (filters, data) => {
  const post = await Post.updateOne(filters, data)
  if (!post) return null
  console.log('repository', post)
  return post
}

export const getMyPostsRepository = async ({ user_email }) => {
  const posts = await Post.find({ user_email: user_email }).sort({ created_at: -1 })
  if (!posts) return null
  console.log('repository', posts)
  return posts
}

export const getAllPostsRepository = async () => {
  const posts = await Post.find().sort({ created_at: -1 })
  if (!posts) return null
  console.log('repository', posts)
  return posts
}

export const getUserInterestsRepository = async (userEmail) => {
  console.log('user email', userEmail)
  const userInterests = await User.findOne(
    { email: userEmail.user_email },
    { interests: 1, _id: 0 },
  )
  if (!userInterests) return null
  console.log('repository', userInterests)
  return userInterests
}

export const getRecommendedPostsRepository = async ({ user_email }) => {
  const posts = await Post.find({ user_email: user_email }).sort({ created_at: -1 })
  if (!posts) return null
  console.log('repository', posts)
  return posts
}
