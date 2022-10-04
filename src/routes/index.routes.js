import express from 'express'
import authRouter from './auth.routes'
import postRouter from './post.routes'
import userRouter from './user.routes'
import questionRouter from './question.routes'
import circleRouter from './circle.routes'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/question', questionRouter)
router.use('/circle', circleRouter)

export default router
