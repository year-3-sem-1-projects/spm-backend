import express from 'express'
import { register, verify, login, logout } from '../controllers/auth'
import { celebrate, Segments } from 'celebrate'
import { registerSchema } from '../validations/user'

const authRouter = express.Router()

authRouter.post('/register', celebrate({[Segments.BODY] : registerSchema}), register)
authRouter.post('/register/verify', verify)
authRouter.post('/login', login)

export default authRouter
