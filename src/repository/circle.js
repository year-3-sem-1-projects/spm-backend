import Circle from '../models/circle'

export const createCircleRepository = async (data) => {
  try {
    return await new Circle(data).save()
  } catch (error) {
    return { status: false, message: error.message }
  }
}

export const deleteCircleRepository = async (data) => {
  try {
    return await Circle.findOneAndDelete(data)
  } catch (error) {
    return { status: false, message: error.message }
  }
}
