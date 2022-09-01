import { addOneQuestion, deleteOneQuestion, updateOneQuestion, getMyQuestionsRepository } from "../repository/question"

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

export const updateQuestion = async (questionContent) => {
    console.log('questionContent', questionContent)
    const question = await updateOneQuestion({question_id: questionContent.question_id}, questionContent)
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



