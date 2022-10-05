import { Router } from 'express'
import { postQuestion, removeQuestion, updateQuestion, getMyQuestions, getAllQuestions, getRecommendedQuestions } from '../controllers/question'

const router = Router()

router.post('/add', postQuestion)
router.delete('/delete', removeQuestion)
router.put('/edit', updateQuestion)
router.get('/get/my-questions', getMyQuestions)
router.get('/get/all-questions', getAllQuestions)
router.get('/get/recommended-questions', getRecommendedQuestions)

export default router