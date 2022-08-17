import Test from '../models/test'

export const addTest = async (test) => {
  const newTest = (await new Test(test).save()).toObject()
  return newTest
}
