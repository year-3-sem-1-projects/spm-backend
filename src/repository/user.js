import User from '../models/user'

export const createUser = async (user) => {
    const userMade = (await new User(user).save()).toObject()
    delete userMade.password
    return userMade
  }