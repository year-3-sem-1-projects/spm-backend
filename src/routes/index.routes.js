import express from 'express'
import authRouter from './auth.routes'
import postRouter from './post.routes'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/post', postRouter)

export default router
