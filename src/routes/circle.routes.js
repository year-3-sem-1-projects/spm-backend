import { Router } from 'express'
import { createCircle, deleteCircle } from '../controllers/circle'

const router = Router()

router.post('/add', createCircle)
router.delete('/delete/circle', deleteCircle)

export default router
