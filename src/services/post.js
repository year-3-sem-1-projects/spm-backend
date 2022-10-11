import {
  addOnePost,
  deleteOnePost,
  updatePostRepository,
  getMyPostsRepository,
  getAllPostsRepository,
  getUserInterestsRepository,
  getRecommendedPostsRepository,
} from '../repository/post'

export const addPost = async (postContent) => {
  const post = await addOnePost(postContent)
  if (!post) return false
  console.log('service', post)
  return post
}

export const deletePost = async (postId) => {
  const post = await deleteOnePost(postId)
  if (!post) return false
  console.log('service', post)
  return post
}

export const updatePostService = async (postContent) => {
  console.log('postContent is this: ', postContent)
  const post = await updatePostRepository({ _id: postContent._id }, postContent)
  if (!post) return false
  console.log('service', post)
  return post
}

export const getMyPostsService = async (userId) => {
  console.log('userid', userId)
  const posts = await getMyPostsRepository(userId)
  if (!posts) return false
  console.log('service', posts)
  return posts
}

export const getAllPostsService = async () => {
  const posts = await getAllPostsRepository()
  if (!posts) return false
  console.log('service', posts)
  return posts
}

export const getUserInterestsService = async (userEmail) => {
  console.log('userEmail', userEmail)
  console.log('coming here')
  const userInterests = await getUserInterestsRepository(userEmail)
  if (!userInterests) return false
  console.log('service', userInterests)
  return userInterests
}

export const getRecommendedPostsService = async (userId) => {
  const posts = await getRecommendedPostsRepository(userId)
  if (!posts) return false
  console.log('service', posts)
  return posts
}
