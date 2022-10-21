import { info } from 'winston'
import {
  createCircleRepository,
  deleteCircleRepository,
  updateCircleRepository,
  getCirclesRepository,
  getCircleRepository,
  joinCircleRepository,
  removeMemberRepository,
} from '../repository/circle'

export const createCircleService = async (data) => {
  return await createCircleRepository(data)
}

export const deleteCircleService = async ({ name, admin, user }) => {
  console.log('name admin user', name, admin, user)
  if (user.email !== admin.email)
    return { status: 401, message: 'You are not authorized to perform this action' }
  return await deleteCircleRepository(name)
}

export const updateCircleService = async (data) => {
  if (data.user.email !== data.admin.email)
    return { status: 401, message: 'You are not authorized to perform this action' }
  if (data?.prevName) {
    const { prevName, name } = data
    delete data.prevName
    if (prevName === name) delete data.name
    return await updateCircleRepository(prevName, data)
  }
  const { name } = data
  delete data.name
  delete data.user
  return await updateCircleRepository(name, data)
}

export const updateCircleAdminService = async (data) => {
  if (data.user.email !== data.admin.email)
    return { status: 401, message: 'You are not authorized to perform this action' }
  if (data.newAdmin) {
    const { name } = data
    data.admin = data.newAdmin
    delete data.newAdmin
    delete data.user
    delete data.name
    return await updateCircleRepository(name, data)
  }
  return { status: 400, message: 'Bad request' }
}

export const getCirclesService = async () => {
  return await getCirclesRepository()
}

export const getCircleService = async (name) => {
  return await getCircleRepository(name)
}

export const getCircleWithMembersService = async (name) => {
  return await getCircleRepository(name, true)
}

export const joinCircleService = async (data) => {
  const { name, user } = data
  return await joinCircleRepository(name, user)
}

export const removeMemberService = async (data) => {
  if (data.user.email !== data.admin.email)
    return { status: 401, message: 'You are not authorized to perform this action' }
  const { name, removeUser } = data
  return await removeMemberRepository(name, removeUser)
}

export const leaveCircleService = async (data) => {
  if (data.user.email === data.admin.email) {
    return { status: 401, message: 'Admin is not allowed to leave the circle' }
  }
  const { name, user } = data
  return await removeMemberRepository(name, user)
}
