import mongoose from 'mongoose'

const AnswerSchema = new mongoose.Schema(
    {
        answer: {
            type: String,
            required: true
        },
        question_id: {
            type: String,   
            required: true
        },
        user_email: {  
            type: String,
            required: true,
        }
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'created_at', updatedAt: 'edited_at' },
    }
)

const Answer = mongoose.model('Answer', AnswerSchema)

export default Answer



