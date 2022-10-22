import {
  addOneQuestion,
  deleteOneQuestion,
  updateQuestionRepository,
  getMyQuestionsRepository,
  getAllQuestionsRepository,
  getUserInterestsRepository,
  getRecommendedQuestionsRepository,
  postAnswerRepository,
  getAnswersRepository,
  getMyAnswersRepository,
  getQuestionRepository,
} from '../repository/question'

export const addQuestion = async (questionContent) => {
  const question = await addOneQuestion(questionContent)
  if (!question) return false
  console.log('service', question)
  return question
}

export const deleteQuestion = async (questionId) => {
  console.log('service', questionId)
  const question = await deleteOneQuestion(questionId)
  if (!question) return false
  console.log('service', question)
  return question
}

export const updateQuestionService = async (questionContent) => {
  console.log('questionContent is this: ', questionContent)
  const question = await updateQuestionRepository({ _id: questionContent._id }, questionContent)
  if (!question) return false
  console.log('service', question)
  return question
}

export const getMyQuestionsService = async ({email}) => {
  console.log('userid', email)
  const questions = await getMyQuestionsRepository({email})
  if (!questions) return false
  console.log('service', questions)
  return questions
}

export const getAllQuestionsService = async () => {
  const questions = await getAllQuestionsRepository()
  if (!questions) return false
  console.log('service', questions)
  return questions
}

export const getUserInterestsService = async ({email}) => {
    console.log('userEmail', email)
    console.log("coming here")
    const userInterests = await getUserInterestsRepository({email})
    if(!userInterests) return false
    console.log('service', userInterests)
    return userInterests
}

export const getRecommendedQuestionsService = async ({email}) => {
    console.log('userEmail', email)
    const recommendedQuestions = await getRecommendedQuestionsRepository({email})
    if(!recommendedQuestions) return false
    console.log('service', recommendedQuestions)
    return recommendedQuestions
}

export const postAnswerService = async (answerContent) => {
    const answer = await postAnswerRepository(answerContent)
    if(!answer) return false
    console.log('service', answer)
    return answer
}

export const getAnswersService = async ({questionId}) => {
    console.log('questionId', questionId)
    const answers = await getAnswersRepository(questionId)
    if(!answers) return false
    console.log('service', answers)
    return answers
}

export const getMyAnswersService = async ({email}) => {
  console.log('email', email)
  const question = await getMyAnswersRepository(email)
  if (!question) return false
  console.log('service', question)
  return question
}

export const getQuestionService = async (questionId) => {
  const question = await getQuestionRepository(questionId)
  if (!question) return false
  console.log('service', question)
  return question
}