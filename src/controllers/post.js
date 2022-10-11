import asyncHandler from '../middleware/async'
import { makeResponse } from '../utils/response'
import {
  addPost,
  deletePost,
  updatePostService,
  getMyPostsService,
  getAllPostsService,
  getUserInterestsService,
  getRecommendedPostsService,
} from '../services/post'

export const postPost = asyncHandler(async (req, res) => {
  const result = await addPost(req.body)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot add your post, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, message: 'Post Added Successfully!' })
})

export const removePost = asyncHandler(async (req, res) => {
  const result = await deletePost(req.body)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot delete your post, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, message: 'Post Deleted Successfully!' })
})

export const updatePost = asyncHandler(async (req, res) => {
  const result = await updatePostService(req.body)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot edit your post, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, message: 'Post Edited Successfully!' })
})

export const getMyPosts = asyncHandler(async (req, res) => {
  const result = await getMyPostsService(req.body)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot get your posts, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, message: 'Posts Retrieved Successfully!' })
})

export const getAllPosts = asyncHandler(async (req, res) => {
  const result = await getAllPostsService()
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot get your posts, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, data: result, message: 'Posts Retrieved Successfully!' })
})

export const getUserInterests = asyncHandler(async (req, res) => {
  const result = await getUserInterestsService(req.body)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot get your interests, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, data: result, message: 'Interests Retrieved Successfully!' })
})

export const getRecommendedPosts = asyncHandler(async (req, res) => {
  const result = await getRecommendedPostsService(req.body)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot get your posts, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  console.log('controller', result)
  return makeResponse({ res, message: 'Posts Retrieved Successfully!' })
})
