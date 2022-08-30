import { Router } from 'express'
import {
  createCircle,
  deleteCircle,
  updateCircle,
  getCircles,
  joinCircle,
  deleteMember,
} from '../controllers/circle'

const router = Router()

router.get('/circles', getCircles)
router.post('/add', createCircle)
router.post('/join', joinCircle)
router.put('/update/circle', updateCircle)
router.delete('/delete/circle', deleteCircle)
router.delete('/delete/member', deleteMember)

export default router
