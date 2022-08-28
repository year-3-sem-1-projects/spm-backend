import { Router } from 'express'
import { postQuestion, removeQuestion, editQuestion } from '../controllers/question'

const router = Router()

router.post('/add', postQuestion)
router.delete('/delete', removeQuestion)
router.put('/edit', editQuestion)

export default router