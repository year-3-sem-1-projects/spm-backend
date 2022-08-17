import Test from '../models/test'
import { addTest } from '../repository/test'

export const createTest = async ({ name }) => {
  return addTest({ name })
}
