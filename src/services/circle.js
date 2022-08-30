import {
  createCircleRepository,
  deleteCircleRepository,
  updateCircleRepository,
  getCirclesRepository,
} from '../repository/circle'

export const createCircleService = async (data) => {
  return await createCircleRepository(data)
}

export const deleteCircleService = async (data) => {
  return await deleteCircleRepository(data)
}

export const updateCircleService = async (data) => {
  if (data?.prevName) {
    const { prevName, name } = data
    delete data.prevName
    if (prevName === name) delete data.name
    return await updateCircleRepository(prevName, data)
  }
  const { name } = data
  delete data.name
  return await updateCircleRepository(name, data)
}

export const getCirclesService = async () => {
  return await getCirclesRepository()
}
