import express from 'express'
import authRouter from './auth.routes'
import testRouter from './test.routes'
const router = express.Router()

router.use('/auth', authRouter)
router.use('/test', testRouter)

export default router
