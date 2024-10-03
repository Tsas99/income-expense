import { sql } from "../../database/index.js";

export const getCurrencyAndBalanceByUserId = async (req, res) => {
  const { userId } = res.locals;
  const { balance } = req.body;
  const { currency } = req.body;

  // const database = await getDatabase();

  // const user = database.users.find((el) => el.iserId === userId);
  const isUserCurrency =
    await sql`UPDATE users SET currency=${currency} WHERE userid = ${userId}`;
  const isUserBalance =
    await sql`UPDATE users SET balance=${balance} WHERE userId = ${userId}`;

  res.status(200).send({ currency: user.currency, balance: user.balance });
};
