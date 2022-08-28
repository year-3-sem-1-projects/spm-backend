import express from 'express'
import { pickInterests } from '../controllers/user'
import { protect } from '../middleware/auth'
const userRouter = express.Router()

userRouter.post('/interests', protect, pickInterests)

export default userRouter
