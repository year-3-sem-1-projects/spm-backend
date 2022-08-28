import { createCircleRepository, deleteCircleRepository } from '../repository/circle'

export const createCircleService = async (data) => {
  return createCircleRepository(data)
}

export const deleteCircleService = async (data) => {
  return deleteCircleRepository(data)
}
