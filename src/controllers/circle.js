import asyncHandler from '../middleware/async'
import { makeResponse } from '../utils/response'
import {
  createCircleService,
  deleteCircleService,
  updateCircleService,
  updateCircleAdminService,
  getCirclesService,
  getCircleService,
  getCircleWithMembersService,
  joinCircleService,
  removeMemberService,
  leaveCircleService,
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
  return makeResponse({ res, data: result, message: 'Circle Deletion Successful.' })
})

export const updateCircle = asyncHandler(async (req, res) => {
  const result = await updateCircleService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Circle Update failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Circle Update Successful.' })
})

export const updateCircleAdmin = asyncHandler(async (req, res) => {
  const result = await updateCircleAdminService(req.body)
  if (!result)
    return makeResponse({ res, status: 500, message: 'Circle Admin could not be updated' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Circle admin updated.' })
})

export const getCircles = asyncHandler(async (req, res) => {
  const result = await getCirclesService()
  if (!result) return makeResponse({ res, status: 500, message: 'Circle Retrieval failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Circle Retrieval Successful.' })
})

export const getCircle = asyncHandler(async (req, res) => {
  const result = await getCircleService(req.params)
  if (!result) return makeResponse({ res, status: 500, message: 'Circle Retrieval failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, data: result, message: 'Circle Retrieval Successful.' })
})

export const getCircleWithMembers = asyncHandler(async (req, res) => {
  const result = await getCircleWithMembersService(req.params)
  if (!result)
    return makeResponse({
      res,
      status: 500,
      message: 'Circle Retrieval with member details failed',
    })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({
    res,
    data: result,
    message: 'Circle Retrieval with member details Successful.',
  })
})

export const joinCircle = asyncHandler(async (req, res) => {
  const result = await joinCircleService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Circle Join failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Circle Join Successful.' })
})

export const removeMember = asyncHandler(async (req, res) => {
  const result = await removeMemberService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Member Deletion failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Member Deletion Successful.' })
})

export const leaveCircle = asyncHandler(async (req, res) => {
  const result = await leaveCircleService(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Leave Circle failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Leave Circle Successful.' })
})
