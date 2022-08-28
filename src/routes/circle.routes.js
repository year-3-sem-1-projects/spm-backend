import { Router } from 'express'
import { createCircle } from '../controllers/circle'

const router = Router()

router.post('/add', createCircle)

export default router
