import express from 'express'
import { pickInterests, editUser } from '../controllers/user'
import { protect } from '../middleware/auth'
const userRouter = express.Router()

userRouter.post('/interests', protect, pickInterests)
userRouter.post('/editUser', protect, editUser)

export default userRouter
