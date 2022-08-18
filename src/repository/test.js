import Test from '../models/test'

export const addTest = async (test) => {
  const newTest = (await new Test(test).save()).toObject()
  return newTest
}

export const findTest = async () => {
  const readTest = await Test.find({}, { _id: 0, name: 1 })
  return readTest
}
