import asyncHandler from '../middleware/async'
import makeResponse from '../utils/response'
import { authRegister } from '../services/auth'

export const register = asyncHandler(async (req, res) => {
  const result = authRegister(req.body)
  if (!result) return makeResponse({res, status: 500, message: 'Registration Failed'})
  if (result.status) return makeResponse({ res, ...result });
  return makeResponse({ res, message: "Registration Successfull. Please check your email to verify your account." });
})
