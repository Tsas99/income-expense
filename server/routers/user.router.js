import { Router } from "express";
import { signUpController } from "../controllers/users/sign-up.controller.js";
import { loginController } from "../controllers/users/login.controller.js";
import { currencyCreate } from "../controllers/users/currency-create.js";
import { balanceCreate } from "../controllers/users/balance-create.js";
import { checkAuth } from "../middlewares/checkAuth.js";
// import { authMiddleware } from "../middlewares/auth.js";
import { getCurrencyAndBalanceByUserId } from "../controllers/users/get-balance-currency.js";
import { testController } from "../controllers/users/test.js";

export const userRouter = Router();

userRouter.route("/users/login").post(loginController);
userRouter.route("/users/signup").post(signUpController);
userRouter.post("/user/currency", checkAuth, currencyCreate);
userRouter.post("/user/balance", checkAuth, balanceCreate);
userRouter.get("/user/checkCab", checkAuth, getCurrencyAndBalanceByUserId);

userRouter.get("/user/test", testController);

// userRouter.post("/users", testController);

export default userRouter;
