import { Router } from "express";
import { checkAuth } from "../middlewares/checkAuth";
import { incomeCreate } from "../controllers/category/income-create";
import { expenseCreate } from "../controllers/category/expense-create";

export const categoryRouter = Router();
categoryRouter.post("/category/expense", checkAuth, expenseCreate);
categoryRouter.post("/category/income", checkAuth, incomeCreate);

export default userRouter;
