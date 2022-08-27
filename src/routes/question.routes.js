import { Router } from 'express'
import { postQuestion, removeQuestion } from '../controllers/question'

const router = Router()

router.post('/add', postQuestion)
router.delete('/delete', removeQuestion)

export default router