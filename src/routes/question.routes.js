import { Router } from 'express'
import { postQuestion, removeQuestion, editQuestion, getMyQuestions, getAllQuestions } from '../controllers/question'

const router = Router()

router.post('/add', postQuestion)
router.delete('/delete', removeQuestion)
router.put('/edit', editQuestion)
router.get('/get/my-questions', getMyQuestions)
router.get('/get/all-questions', getAllQuestions)

export default router