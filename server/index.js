import cors from "cors";
import env from "dotenv";
import express from express;
import userRouter from "./routers/user.router";

const app = express ();
const port = process.env.PORT;
console.log(port);

env.config({path:"./.env"});

app.use (cors());
app.use(express.json ());

app.get ("/signup", async (req, res)=>{})

app.use("/api", useRouter);

app.listen(port, console.log(`http://localhost:${port}`));
