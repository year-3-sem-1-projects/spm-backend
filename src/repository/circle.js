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

export const updateCircleRepository = async (name, data) => {
  try {
    return await Circle.findOneAndUpdate({ name }, data)
  } catch (error) {
    return { status: false, message: error.message }
  }
}

export const getCirclesRepository = async () => {
  try {
    return await Circle.find()
  } catch (error) {
    return { status: false, message: error.message }
  }
}
