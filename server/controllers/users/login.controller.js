import { readFileSync } from "fs";
import { DbPath } from "../../utils/constant.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "dotenv";
env.config();

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const JsonResult = await readFileSync(DbPath, "utf-8");
  const db = JSON.parse(JsonResult);
  const user = db.users.find((el) => el.email === email);

  if (!user) {
    res.status(400).send("email or password is wrong");
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  const tokenSecret = "key";

  if (!isMatch) {
    res.status(400).send("email or password is wrong");
    return;
  }

  const token = jwt.sign({ email }, process.env.tokenSecret, {
    expiresIn: "5m",
  });

  res.status(200).send({ email, token });
};
