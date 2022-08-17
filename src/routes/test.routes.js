import { Router } from 'express'
import { create_Test } from '../controllers/test'

const router = Router()

router.post('/add', create_Test)

export default router
