import { sql } from "../../database/index.js";

export const currencyCreate = async (req, res) => {
  const { userId } = res.locals;
  const { currency } = req.body;

  await sql`UPDATE users SET currency=${currency} WHERE userid = ${userId}`;

  res.status(200).send({ message: "Successfully updated" });
};
