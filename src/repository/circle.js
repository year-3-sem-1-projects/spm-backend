import Circle from '../models/circle'
import User from '../models/user'

export const createCircleRepository = async (data) => {
  try {
    return await new Circle(data).save()
  } catch (error) {
    return { status: false, message: error.message }
  }
}

export const deleteCircleRepository = async (name) => {
  try {
    return await Circle.findOneAndDelete({ name })
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

export const getCircleRepository = async (name, member = false) => {
  try {
    const circle = (await Circle.findOne(name, { created_at: 0, updated_at: 0 }))._doc
    console.log(circle)
    if (member) {
      const members = await User.find({ _id: { $in: circle.members } }, { username: 1, email: 1 })
      return { ...circle, members }
    }
    return circle
  } catch (error) {
    return { status: false, message: error.message }
  }
}

export const joinCircleRepository = async (name, user) => {
  try {
    if (user.user_circles.includes(name))
      return { status: false, message: 'You are already a member of this circle' }
    const member = await Circle.findOneAndUpdate({ name }, { $push: { members: user } })
    const { _id } = user
    await User.findOneAndUpdate({ _id }, { $push: { user_circles: name } })
    return member
  } catch (error) {
    return { status: false, message: error.message }
  }
}

export const removeMemberRepository = async (name, removeUser) => {
  try {
    const user = await User.findById({ _id: removeUser._id })
    if (!user.user_circles.includes(name))
      return { status: false, message: 'You are not a member of this circle' }
    const member = await Circle.findOneAndUpdate({ name }, { $pull: { members: user } })
    const { _id } = user
    await User.findOneAndUpdate({ _id }, { $pull: { user_circles: name } })
    return member
  } catch (error) {
    return { status: false, message: error.message }
  }
}
