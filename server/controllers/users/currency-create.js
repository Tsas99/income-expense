import { DATABASE_URL } from "../../utils/constant.js";
import { getDatabase } from "../../utils/helper.js";
import { writeFileSync } from "fs";
import { sql } from "../../database/index.js";

export const currencyCreate = async (req, res) => {
  const { userId } = res.locals;
  const { currency } = req.body;

  await sql`UPDATE users SET currency=${currency} WHERE userId = ${userId}`;

  res.status(200).send({ message: "Successfully updated" });
};
