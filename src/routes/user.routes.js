import express from 'express'
import { pickInterests, editUser } from '../controllers/user'

const userRouter = express.Router()

userRouter.post('/interests', pickInterests)
userRouter.post('/editUser', editUser)

export default userRouter
