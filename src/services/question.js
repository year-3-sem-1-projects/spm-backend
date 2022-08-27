import { addOneQuestion, deleteOneQuestion } from "../repository/question"

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



