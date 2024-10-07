import { Router } from "express";
import { checkAuth } from "../middlewares/checkAuth.js";
import { incomeCreate } from "../controllers/category/income-create.js";
import { expenseCreate } from "../controllers/category/expense-create.js";

const categoryRouter = Router();
categoryRouter.post("/category/expense", checkAuth, expenseCreate);
categoryRouter.post("/category/income", checkAuth, incomeCreate);

export default categoryRouter;
