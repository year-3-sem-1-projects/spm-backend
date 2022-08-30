import { Router } from 'express'
import {
  createCircle,
  deleteCircle,
  updateCircle,
  getCircles,
  joinCircle,
} from '../controllers/circle'
import Circle from '../models/circle'

const router = Router()

router.post('/add', createCircle)
router.delete('/delete/circle', deleteCircle)
router.put('/update/circle', updateCircle)
router.get('/circles', getCircles)
router.post('/join', joinCircle)

export default router
