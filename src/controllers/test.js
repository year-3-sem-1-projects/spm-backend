import asyncHandler from '../middleware/async'
import { makeResponse } from '../utils/response'
import { createTest, readTest } from '../services/test'

export const create_Test = asyncHandler(async (req, res) => {
  const result = createTest(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Creation failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({ res, message: 'Creation Successful.' })
})

export const read_Test = asyncHandler(async (req, res) => {
  const result = readTest()
  if (!result) return makeResponse({ res, status: 500, message: 'Read failed' })
  if (result.status) return makeResponse({ res, ...result })
  console.log(result)
  return makeResponse({ res, result, message: 'Read Successful.' })
})
