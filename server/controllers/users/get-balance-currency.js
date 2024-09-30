import { getDatabase } from "../../utils/helper.js";

export const getCurrencyAndBalanceByUserId = async (_, res) => {
  const { userId } = res.locals;
  const database = await getDatabase();

  const user = database.users.find((el) => el.iserId === userId);

  res.status(200).send({ currency: user.currency, balance: user.balance });
};
