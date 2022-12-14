import { Router } from 'express'
import {
  createCircle,
  deleteCircle,
  updateCircle,
  getCircles,
  getCircle,
  getCircleWithMembers,
  joinCircle,
  removeMember,
  updateCircleAdmin,
  leaveCircle,
} from '../controllers/circle'

const router = Router()

router.get('/', getCircles)
router.get('/:name', getCircle)
router.get('/:name/members', getCircleWithMembers)
router.post('/add', createCircle)
router.post('/join', joinCircle)
router.put('/update', updateCircle)
router.put('/update/admin', updateCircleAdmin)
router.delete('/remove/circle', deleteCircle)
router.delete('/remove/member', removeMember)
router.delete('/leave', leaveCircle)

export default router
