import { addOneQuestion, deleteOneQuestion, updateQuestionRepository, getMyQuestionsRepository, getAllQuestionsRepository, getUserInterestsRepository, getRecommendedQuestionsRepository } from "../repository/question"

export const addQuestion = async (questionContent) => {
    const question = await addOneQuestion(questionContent)
    if(!question) return false
    console.log('service', question)
    return question
}

export const deleteQuestion = async (questionId) => {
    const question = await deleteOneQuestion(questionId)
    if(!question) return false
    console.log('service', question)
    return question
}

export const updateQuestionService = async (questionContent) => {
    console.log('questionContent is this: ', questionContent)
    const question = await updateQuestionRepository({_id: questionContent._id}, questionContent)
    if(!question) return false
    console.log('service', question)
    return question
}

export const getMyQuestionsService = async (userId) => {
    console.log('userid', userId)
    const questions = await getMyQuestionsRepository(userId)
    if(!questions) return false
    console.log('service', questions)
    return questions
}

export const getAllQuestionsService = async () => {
    const questions = await getAllQuestionsRepository()
    if(!questions) return false
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

export const getRecommendedQuestionsService = async (userId) => {
    const questions = await getRecommendedQuestionsRepository(userId)
    if(!questions) return false
    console.log('service', questions)
    return questions
}



