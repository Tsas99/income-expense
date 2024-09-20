import { Router } from "express";
import { signUpController } from "../controllers/users/sign-up.controller.js";
import { loginController } from "../controllers/users/login.controller.js";

const userRouter = Router();

userRouter.route("/users/login").post(loginController);
userRouter.route("/users/signup").post(signUpController);

export default userRouter;
