import Question from "../models/question";
import User from "../models/user";
import Answer from "../models/answer";

export const addOneQuestion = async (questionContent) => {
    const question = await new Question(questionContent).save()
    if(!question) return null
    console.log('repository', question)
    return question
}

export const deleteOneQuestion = async (questionId) => {
    console.log('repository', questionId.questionId)
    const question = await Question.deleteOne({_id:questionId.questionId})
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

export const getMyQuestionsRepository = async ({email}) => {
    const questions = await Question.find({user_email: email}).sort({created_at: -1})
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

export const getRecommendedQuestionsRepository = async ({email}) => {
    console.log('user email', email)
    const recommendedQuestions = await Question.aggregate([
        {
            $lookup: {
                from: "users",
                localField: "category",
                foreignField: "interests",
                as: "recommended_questions"
            }
        }
    ])
    if(!recommendedQuestions) return null
    console.log('repository', recommendedQuestions)
    return recommendedQuestions
}

export const postAnswerRepository = async (answerContent) => {
    const answer = await Answer(answerContent).save()
    if(!answer) return null
    console.log('repository', answer)
    return answer
}

export const getAnswersRepository = async (question_id) => {
    console.log('question_id', question_id)
    const answers = await Answer.find({question_id: question_id}).sort({created_at: -1})
    if(!answers) return null
    console.log('repository', answers)
    return answers
}

export const getMyAnswersRepository = async (email) => {
    console.log('email', email)
    const answers = await Answer.find({user_email: email}).sort({created_at: -1})
    if(!answers) return null
    console.log('repository', answers)
    return answers
}

export const getQuestionRepository = async ({questionId}) => {
    console.log('question_id', questionId)
    const question = await Question.findOne({_id: questionId})
    if(!question) return null
    console.log('repository', question)
    return question
}
