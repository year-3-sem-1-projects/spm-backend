import { Router } from 'express'
import {
  createCircle,
  deleteCircle,
  updateCircle,
  getCircles,
  getCircle,
  joinCircle,
  removeMember,
  updateCircleAdmin,
} from '../controllers/circle'

const router = Router()

router.get('/', getCircles)
router.get('/:name', getCircle)
router.post('/add', createCircle)
router.post('/join', joinCircle)
router.put('/update', updateCircle)
router.put('/update/admin', updateCircleAdmin)
router.delete('/remove/circle', deleteCircle)
router.delete('/remove/member', removeMember)

export default router
