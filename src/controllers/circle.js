import asyncHandler from '../middleware/async'
import { makeResponse } from '../utils/response'
import {
  createCircleService,
  deleteCircleService,
  updateCircleService,
  getCirclesService,
  joinCircleService,
  deleteMemberService,
} from '../services/circle'

export const createCircle = asyncHandler(async (req, res) => {
  const result = await createCircleService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Circle Creation failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Circle Creation Successful.' })
})

export const deleteCircle = asyncHandler(async (req, res) => {
  const result = await deleteCircleService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Circle Deletion failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Circle Deletion Successful.' })
})

export const updateCircle = asyncHandler(async (req, res) => {
  const result = await updateCircleService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Circle Update failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Circle Update Successful.' })
})

export const getCircles = asyncHandler(async (req, res) => {
  const result = await getCirclesService()
  console.log(result)
  if (!result) return makeResponse({ res, status: 500, message: 'Circle Retrieval failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Circle Retrieval Successful.' })
})

export const joinCircle = asyncHandler(async (req, res) => {
  const result = await joinCircleService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Circle Join failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Circle Join Successful.' })
})

export const deleteMember = asyncHandler(async (req, res) => {
  const result = await deleteMemberService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Member Deletion failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Member Deletion Successful.' })
})
