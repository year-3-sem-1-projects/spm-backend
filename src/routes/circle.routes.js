import { Router } from 'express'
import { createCircle, deleteCircle, updateCircle } from '../controllers/circle'

const router = Router()

router.post('/add', createCircle)
router.delete('/delete/circle', deleteCircle)
router.put('/update/circle', updateCircle)
export default router
