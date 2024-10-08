import cors from "cors";
import env from "dotenv";
import express from "express";
import userRouter from "./routers/user.router.js";
import categoryRouter from "./routers/category.router.js";

env.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", categoryRouter);

app.listen(port, console.log(`http://localhost:${port}`));
