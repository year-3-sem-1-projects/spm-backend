import mongoose from 'mongoose'

const CircleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: true,
    },
    admin: {
      type: Object,
      required: true,
    },
    members: {
      type: Array,
      required: false,
    },
    iconImage: {
      type: String,
      required: false,
    },
    coverImage: {
      type: String,
      required: false,
    },
    details: {
      type: String,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
)

const Circle = mongoose.model('circle', CircleSchema)

export default Circle
