import jwt from "jsonwebtoken";
import env from "dotenv";
import bcrypt from "bcryptjs";
import { getDatabase } from "../../utils/helper.js";

env.config();

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const database = await getDatabase();
  // const isUserExisting = database.users.find((el) => el.email === email);

  if (!isUserExisting) {
    res.status(404).send({ message: "User not existed" });
    return;
  }
  const isUserExisting = await sql`SELECT * FROM users WHERE email=${email}`;
  if (isUserExisting.length) {
    res.status(400).send("Already Registered Email");
    return;
  }

  const isPasswordMatch = await bcrypt.compare(
    password,
    isUserExisting.password
  );

  if (!isPasswordMatch) {
    res.status(400).send({ message: "Username or password wrong" });
    return;
  }

  const token = jwt.sign(
    { userId: isUserExisting.userId },
    process.env.JWTF_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.status(200).send({
    message: "Successfully logged in",
    token: token,
  });
};
