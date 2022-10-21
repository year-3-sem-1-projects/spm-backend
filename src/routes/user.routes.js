import express from 'express'
import { pickInterests, editUser, getOneUser } from '../controllers/user'

const userRouter = express.Router()

userRouter.post('/interests', pickInterests)
userRouter.post('/editUser', editUser)
userRouter.post('/getOneUser', getOneUser)

export default userRouter
