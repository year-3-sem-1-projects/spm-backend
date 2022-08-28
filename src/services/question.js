import { addOneQuestion, deleteOneQuestion, updateOneQuestion } from "../repository/question"

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
    console.log(questionContent)
    const question = await updateOneQuestion({question_id: questionContent.question_id}, questionContent)
    if(!question) return false
    console.log('service', question)
    return question
}



