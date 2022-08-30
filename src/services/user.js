import { getOneUser, findOneAndUpdateUser } from '../repository/user'

export const addInterests = async (email, interests) => {
  const user = await getOneUser({email})
  if (!user) return false
  if (!user.is_verified) return {status: 401, message: 'Please verify your account before adding interests.'}
  return findOneAndUpdateUser({ email: user.email }, { interests })
}

export const updateUser = async (email, username, headline) => {
  const user = await getOneUser({email})
  if (!user) return false
  if (!user.is_verified) return {status: 401, message: 'Please verify your account before adding interests.'}
  return findOneAndUpdateUser({ email: user.email }, { username, headline })
}