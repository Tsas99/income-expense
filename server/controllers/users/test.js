import { sql } from "../../database/index.js";
import { v4 as uuid } from "uuid";
export const testController = async (req, res) => {
  // const { username, email, password } = req.body;
  // const createdAt = new Date();
  // const userId = uuid();
  // await sql`INSERT INTO users (usserId, username, email, password, createdAt)
  //  VALUES(${username}, ${email}, ${password}, ${createdAt})`;

  const result = await sql`SELECT * FROM users WHERE username = 'tsas'`;

  console.log(result);

  res.send(result);
};
// CREATE TABLE IF NOT EXISTS users(userId SERIAL PRIMARY KEY,username TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL, currency CHAR(3), balance TEXT  ,createdAt TIMESTAMP NOT NULL)
