import PostService from '../services'
import asyncHandler from '../middleware/async'
import { makeResponse } from '../utils/response'

export const insertPost = asyncHandler(async (req, res) => {
  const result = await PostService.insertPost(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Post insertion Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({
    res,
    message: 'Post insert Successfully',
  })
})

export const getAllPosts = asyncHandler(async (req, res) => {
  const result = await PostService.getAllPosts()
  if (!result) return makeResponse({ res, status: 500, message: 'Get All Post Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({
    res,
    message: 'Get All Post Successfully ',
  })
})

export const getOnePost = asyncHandler(async (req, res) => {
  const result = await PostService.getOnePost(req.params.id)
  if (!result) return makeResponse({ res, status: 500, message: 'Get One Post Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({
    res,
    message: 'Get One Post Successfully',
  })
})

export const updatePost = asyncHandler(async (req, res) => {
  const result = await PostService.updatePost(req.params.id, req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Update Post Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({
    res,
    message: 'Update Post Successfully ',
  })
})

export const deletePost = asyncHandler(async (req, res) => {
  const result = await PostService.deletePost(req.params.id)
  if (!result) return makeResponse({ res, status: 500, message: 'Delete Post Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({
    res,
    message: 'Delete Post Successfully ',
  })
})

export const searchPosts = asyncHandler(async (req, res) => {
  const result = await PostService.searchPosts(req.params.search)
  if (!result) return makeResponse({ res, status: 500, message: 'Search Post Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({
    res,
    message: 'Search Post Successfully ',
  })
})

export const increaseViewCount = asyncHandler(async (req, res) => {
  const result = await PostService.increaseViewCount(req.params.id)
  if (!result) return makeResponse({ res, status: 500, message: 'Increase View Count is Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({
    res,
    message: 'Increase View Count is Successfully ',
  })
})

// export const getAllPostsOrderByViewCount = asyncHandler(async (req, res) => {
//   const result = await PostService.getAllPostsOrderByViewCount()
//   if (!result) return makeResponse({ res, status: 500, message: 'Get All post Failed' })
//   if (result.status) return makeResponse({ res, ...result })
//   return makeResponse({
//     res,
//     message: 'Get All post Successfully ',
//   })
// })
