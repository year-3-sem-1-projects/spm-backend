import Question from "../models/question";
import User from "../models/user";

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

export const updateQuestionRepository = async (filters, data) => {
    const question = await Question.updateOne(filters, data)
    if(!question) return null
    console.log('repository', question)
    return question
}

export const getMyQuestionsRepository = async ({user_email}) => {
    const questions = await Question.find({user_email: user_email}).sort({created_at: -1})
    if(!questions) return null
    console.log('repository', questions)
    return questions
}

export const getAllQuestionsRepository = async () => {
    const questions = await Question.find().sort({created_at: -1})
    if(!questions) return null
    console.log('repository', questions)
    return questions
}

export const getUserInterestsRepository = async ({email}) => {
    console.log('user email', email)
    const userInterests = await User.findOne({email: email}, {interests: 1, _id: 0})
    if(!userInterests) return null
    console.log('repository', userInterests)
    return userInterests
}

export const getRecommendedQuestionsRepository = async ({user_email}) => {
    const questions = await Question.find({user_email: user_email}).sort({created_at: -1})
    if(!questions) return null
    console.log('repository', questions)
    return questions
}