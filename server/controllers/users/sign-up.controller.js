import { readFileSync, writeFileSync } from "fs";
import { v4 } from "uuid";
import { DbPath } from "../../utils/constant.js";
import bcrypt from "bcryptjs";
import env from "dotenv";

export const signUpController = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.send("Invalid inputs").status(400);
    return;
  }
  const JsonResult = await readFileSync(DbPath, "utf-8");
  const db = JSON.parse(JsonResult);
  const foundUser = db.users.find((el) => el.email === email);

  if (foundUser) {
    res.status(400).send("Already Registered Email");
    return;
  }

  const hashedPassword = await bcrypt.hashSync(
    password,
    Number(process.env.SALT)
  );
  db.users.push({
    userId: v4(),
    username,
    email,
    password: hashedPassword,
  });
  await writeFileSync(DbPath, JSON.stringify(db), "utf-8");
  res.send("Successfully Created the user");
};
