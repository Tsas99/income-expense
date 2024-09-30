import { writeFileSync } from "fs";
import { getDatabase } from "../../utils/helper.js";
import { sql } from "../../database/index.js";
import bcrypt from "bcryptjs";
import { v4 } from "uuid";
import env from "dotenv";

export const signUpController = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.send("Invalid inputs").status(400);
    return;
  }

  const isUserExisting = await sql`SELECT * FROM users WHERE email=${email}`;

  if (isUserExisting.length) {
    res.status(400).send("Already Registered Email");
    return;
  }

  const hashedPassword = await bcrypt.hashSync(password);
  const createdAt = new Date();

  await sql`INSERT INTO users (username, email, password, createdAt) VALUES(${username}, ${email}, ${hashedPassword}, ${createdAt})`;

  res.status(201).send({ message: "Successfully registered" });
};
