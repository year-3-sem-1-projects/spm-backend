import asyncHandler from '../middleware/async'
import { makeResponse } from '../utils/response'
import { addInterests, updateUser } from '../services/user'

export const pickInterests = asyncHandler(async (req, res) => {
  const result = await addInterests(req.user.email, req.body.interests)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot add your interests, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Interests Added Successfully!' })
})

export const editUser = asyncHandler(async (req, res) => {
  const result = await updateUser(req.user.email, req.body.username, req.body.headline)
  if (!result)
    return makeResponse({
      res,
      status: 400,
      message: 'Cannot update your profile, please try again.',
    })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Profile Updated Successfully!' })
})