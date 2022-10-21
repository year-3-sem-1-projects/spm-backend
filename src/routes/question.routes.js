import { Router } from 'express'
import { protect } from '../middleware/auth'
import { postQuestion, removeQuestion, updateQuestion, getMyQuestions, getAllQuestions, getUserInterests, getRecommendedQuestions } from '../controllers/question'

const router = Router()

router.post('/add', postQuestion)
router.delete('/delete', removeQuestion)
router.put('/edit', updateQuestion)
router.get('/get/my-questions', getMyQuestions)
router.get('/get/all-questions', getAllQuestions)
router.get('/get/user-interests/:email', getUserInterests)
router.get('get/user/:email', getQuestionUser)
router.get('/get/recommended-questions', getRecommendedQuestions)

export default router