import asyncHandler from '../middleware/async'
import { makeResponse } from '../utils/response'
import { createCircleService, deleteCircleService } from '../services/circle'

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
