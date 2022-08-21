import express from "express";
import { register, verify, login } from "../controllers/auth";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/register/verify", verify);
authRouter.post("/login", login);

export default authRouter;