import asyncHandler from "../middleware/async";
import { makeResponse } from "../utils/response";
import { addQuestion } from "../services/question";

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

