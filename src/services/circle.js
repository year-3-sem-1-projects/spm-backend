import {
  createCircleRepository,
  deleteCircleRepository,
  updateCircleRepository,
} from '../repository/circle'

export const createCircleService = async (data) => {
  return await createCircleRepository(data)
}

export const deleteCircleService = async (data) => {
  return await deleteCircleRepository(data)
}

export const updateCircleService = async (data) => {
  const { prevName, name } = data
  delete data.prevName
  if (prevName === name) delete data.name
  return await updateCircleRepository(prevName, data)
}
