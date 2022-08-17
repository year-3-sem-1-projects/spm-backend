import asyncHandler from '../middleware/async'
import { makeResponse } from '../utils/response'
import { createTest } from '../services/test'

export const create_Test = asyncHandler(async (req, res) => {
  const result = createTest(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Creation failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Creation Successful.' })
})
