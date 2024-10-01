import { DATABASE_URL } from "../../utils/constant.js";
import { getDatabase } from "../../utils/helper.js";
import { writeFileSync } from "fs";
import { sql } from "../../database/index.js";

export const balanceCreate = async (req, res) => {
  const { userId } = res.locals;
  const { balance } = req.body;

  await sql`UPDATE users SET balance=${balance} WHERE userId = ${userId}`;

  // const database = await getDatabase();
  // const updatedUsers = database.users.map((el) => {
  //   if (el.userId === userId) {
  //     return { ...el, balance: balance };
  //   } else {
  //     return { ...el };
  //   }
  // });
  // database.users = updatedUsers;

  // await writeFileSync(DATABASE_URL, JSON.stringify(database), "utf-8");
  res.status(200).send({ message: "Successfully updated" });
};
