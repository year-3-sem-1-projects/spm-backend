import express from 'express'
import authRouter from './auth.routes'
import postRouter from './post.routes'
import circleRouter from './circle.routes'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/post', postRouter)
router.use('/circle', circleRouter)

export default router
