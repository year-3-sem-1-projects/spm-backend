import express from 'express'
import authRouter from './auth.routes'
import postRouter from './post.routes'
import userRouter from './user.routes'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/post', postRouter)

export default router
