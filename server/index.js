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

// import cors from "cors";
// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import { writeFileSync, readFileSync } from "fs";

// const dbModel = {
//   users: [
//     {
//       username: String,
//     },
//   ],
//   password: [
//     {
//       password: String,
//     },
//   ],
// };

// const app = express();

// app.use(cors());
// const port = 8000;
// app.use(express.json());
// const tokenSekret = "key";

// app.get("/users", async (req, res) => {
//   const resultJson = await readFileSync("./db.json", "utf-8");
//   const result = JSON.parse(resultJson);
//   console.log(result);
//   res.send(result.users);
// });

// app.post("/sign-up", async (req, res) => {
//   const { username, password } = req.body;
//   const resultJson = await readFileSync("./db.json", "utf-8");
//   const result = JSON.parse(resultJson);
//   const user = result.users.find((el) => el.username === username);
//   if (!user) {
//     result.users.push({
//       username,
//       password,
//     });
//   }

//   const hashedPassword = await bcrypt.hashSync(password, 10);
//   writeFileSync(
//     "./db.json",
//     JSON.stringify({ username, password: hashedPassword })
//   );
//   res.status(200).send("Success");
// });

// app.post("/sign-in", async (req, res) => {
//   const { username, password } = req.body;

//   const result = JSON.parse(readFileSync("./db.json", "utf-8"));

//   const isMatch = await bcrypt.compare(password, result.password);
//   console.log(result.users);

//   if (!isMatch) {
//     res.status(400).send("username or passwordis not match");
//     return;
//   }
//   const token = jwt.sign({ username: result.username }, tokenSekret, {
//     expiresIn: "5m",
//   });
//   res.status(200).send({ username, token });
// });
// app.post("/refresh", async (req, res) => {
//   const { token } = req.body;
//   const decryptedToken = jwt.verify(token, tokenSekret);
//   res.status(200).send({ decryptedToken });
// });
// app.listen(port, () => console.log(`http://localhost:${port}`));
