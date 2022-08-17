import mongoose from 'mongoose'

const TestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const Test = mongoose.model('test', TestSchema)

export default Test
