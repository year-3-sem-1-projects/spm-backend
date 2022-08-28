import Question from "../models/question";

export const addOneQuestion = async (questionContent) => {
    const question = await new Question(questionContent).save()
    if(!question) return null
    console.log('repository', question)
    return question
}

export const deleteOneQuestion = async ({question_id}) => {
    console.log('repository', question_id)
    const question = await Question.deleteOne({question_id})
    if(!question) return null
    console.log('repository', question)
    return question
}

export const updateOneQuestion = async (filters, data) => {
    const question = await Question.updateOne(filters, data, { new: true })
    if(!question) return null
    console.log('repository', question)
    return question
}