import { sql } from "../../database/index.js";

export const getCurrencyAndBalanceByUserId = async (req, res) => {
  const { userId } = res.locals;
  const { balance } = req.body;
  const { currency } = req.body;

  // const database = await getDatabase();

  // const user = database.users.find((el) => el.iserId === userId);
  const user = await sql`SELECT * FROM users  WHERE userid = ${userId}`;
  // const isUserBalance = await sql`UPDATE users SET  WHERE userId = ${userId}`;
  console.log(user[0]);

  res.status(200).send(user[0]);
};
