import { sql } from "../../database/index.js";
import { v4 } from "uuid";

export const expenseCreate = async (req, res) => {
  const { userId } = res.locals;
  const { amount, category, recordtype, date, note } = req.body;

  const recordid = v4();

  await sql`INSERT INTO records (recordid, categoryid, recordtype, userid, amount,  createdat, note) 
  VALUES (${recordid}, ${category}, ${recordtype}, ${userId}, ${amount}, ${date}, ${note})`;

  res.status(201).send({ message: "Successfully registered" });
};
