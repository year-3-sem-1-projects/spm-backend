import { createCircleRepository } from '../repository/circle'

export const createCircleService = async (data) => {
  return createCircleRepository(data)
}
