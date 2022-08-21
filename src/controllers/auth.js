import asyncHandler from '../middleware/async'
import { makeResponse } from '../utils/response'
import { authRegister } from '../services/auth'

export const register = asyncHandler(async (req, res) => {
  const result = await authRegister(req.body)
  if (!result) return makeResponse({ res, status: 500, message: 'Registration Failed' })
  if (result.status) return makeResponse({ res, ...result })
  return makeResponse({
    res,
    message:
      'Registration Successful. Please check your email and enter the code we sent to verify your account.',
  })
})
