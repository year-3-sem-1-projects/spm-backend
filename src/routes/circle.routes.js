import { Router } from 'express'
import { createCircle, deleteCircle, updateCircle, getCircles } from '../controllers/circle'

const router = Router()

router.post('/add', createCircle)
router.delete('/delete/circle', deleteCircle)
router.put('/update/circle', updateCircle)
router.get('/circles', getCircles)
export default router
