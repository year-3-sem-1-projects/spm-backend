import { Router } from 'express'
import { postQuestion, removeQuestion, editQuestion, getMyQuestions } from '../controllers/question'

const router = Router()

router.post('/add', postQuestion)
router.delete('/delete', removeQuestion)
router.put('/edit', editQuestion)
router.get('/get/my-questions', getMyQuestions)

export default router