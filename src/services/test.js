import Test from '../models/test'
import { addTest, findTest } from '../repository/test'

export const createTest = async ({ name }) => {
  return addTest({ name })
}

export const readTest = async () => {
  return findTest()
}
