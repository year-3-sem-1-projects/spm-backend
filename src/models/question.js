import mongoose from 'mongoose'

const QuestionSchema = new mongoose.Schema(
    {
        question_id: {
            type: Number,
            required: true
        },
        question: {
            type: String,
            required: true
        },
        category: {
            type: String,   
            required: true
        },
        user_email: {  
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'created_at', updatedAt: 'edited_at' },
    }
)

