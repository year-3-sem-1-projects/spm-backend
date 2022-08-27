import { Router } from 'express'
import { postQuestion } from '../controllers/question'

const router = Router()

router.post('/add', postQuestion)

export default router