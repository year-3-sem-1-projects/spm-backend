import { Router } from 'express'
import { create_Test, read_Test } from '../controllers/test'

const router = Router()

router.post('/add', create_Test)
router.get('/read', read_Test)

export default router
