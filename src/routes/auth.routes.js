import express from "express";
import { register, verify } from "../controllers/auth";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/register/verify", verify);

export default authRouter;
