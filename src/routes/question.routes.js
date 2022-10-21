import { Router } from 'express'
import { postQuestion, removeQuestion, updateQuestion, getMyQuestions, getAllQuestions, getUserInterests, getRecommendedQuestions, postAnswer, getAnswers, getMyAnswers } from '../controllers/question'

const router = Router()

router.post('/add', postQuestion)
router.post('/answer/add', postAnswer)
router.delete('/delete', removeQuestion)
router.put('/edit', updateQuestion)
router.get('/get/my-questions/:email', getMyQuestions)
router.get('/get/all-questions', getAllQuestions)
router.get('/get/answers/:questionId', getAnswers)
router.get('/get/my-answers/:email', getMyAnswers)
router.get('/get/user-interests/:email', getUserInterests)
router.get('/get/recommended-questions', getRecommendedQuestions)

export default router