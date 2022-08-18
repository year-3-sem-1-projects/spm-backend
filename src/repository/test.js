import Test from '../models/test'

export const addTest = async (test) => {
  const newTest = (await new Test(test).save()).toObject()
  return newTest
}

export const findTest = async () => {
  const newTest = (await new Test().find({})).toObject()
  return newTest
}
