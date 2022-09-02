import asyncHandler from "../middleware/async";
import { makeResponse } from "../utils/response";
import { addQuestion, deleteQuestion, updateQuestion, getMyQuestionsService, getAllQuestionsService } from "../services/question";

export const postQuestion = asyncHandler(async (req, res) => {
    const result = await addQuestion(req.body)
    if (!result)
        return makeResponse({
            res,
            status: 400,
            message: "Cannot add your question, please try again.",
    })
    if (result.status) return makeResponse({ res, ...result })
    console.log('controller', result)
    return makeResponse({ res, message: "Question Added Successfully!" });
})

export const removeQuestion = asyncHandler(async (req, res) => {
    const result = await deleteQuestion(req.body)
    if (!result)
        return makeResponse({
            res,
            status: 400,
            message: "Cannot delete your question, please try again.",
    })
    if (result.status) return makeResponse({ res, ...result })
    console.log('controller', result)
    return makeResponse({ res, message: "Question Deleted Successfully!" });
})

export const editQuestion = asyncHandler(async (req, res) => {
    const result = await updateQuestion(req.body)
    if (!result)
        return makeResponse({
            res,
            status: 400,
            message: "Cannot edit your question, please try again.",
    })
    if (result.status) return makeResponse({ res, ...result })
    console.log('controller', result)
    return makeResponse({ res, message: "Question Edited Successfully!" });
})

export const getMyQuestions = asyncHandler(async (req, res) => {
    const result = await getMyQuestionsService(req.body)
    if (!result)
        return makeResponse({
            res,
            status: 400,
            message: "Cannot get your questions, please try again.",
    })
    if (result.status) return makeResponse({ res, ...result })
    console.log('controller', result)
    return makeResponse({ res, message: "Questions Retrieved Successfully!" });
})

export const getAllQuestions = asyncHandler(async (req, res) => {
    const result = await getAllQuestionsService()
    if (!result)
        return makeResponse({
            res,
            status: 400,
            message: "Cannot get your questions, please try again.",
    })
    if (result.status) return makeResponse({ res, ...result })
    console.log('controller', result)
    return makeResponse({ res, message: "Questions Retrieved Successfully!" });
})



