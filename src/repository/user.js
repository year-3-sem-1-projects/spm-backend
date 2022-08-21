import User from '../models/user'

export const createUser = async (user) => {
  const userCreated = (await new User(user).save()).toObject()
  delete userCreated.password
  return userCreated
}

export const getOneUser = async (filters, returnPassword) => {
  const user = await User.findOne(filters).lean()
  if (!user) return null

  if (!returnPassword) delete user.password
  return user
}