import { sql } from "../../database";

export const expenseCreate = async (req, res) => {
  const { userId } = res.locals;
  const { amount, category, date, payer, note } = req.body;

  await sql`INSERT INTO records (recordid, categoryid, recordtype, userid, amount, category, date, payer, note) 
  VALUES (${recordid}, ${categoryid}, ${recordtype}, ${userid}, ${amount}, ${category} ,${date}, ${payer}, ${note})`;

  res.status(201).send({ message: "Successfully registered" });
};
