import { DATABASE_URL } from "../../utils/constant.js";
import { getDatabase } from "../../utils/helper.js";
import { writeFileSync } from "fs";

export const currencyCreate = async (req, res) => {
  const { userId } = res.locals;
  const { currency } = req.body;

  const database = await getDatabase();

  const updatedUsers = database.users.map((el) => {
    if (el.userId === userId) {
      return { ...el, curency: currency };
    } else {
      return { ...el };
    }
  });
  database.users = updatedUsers;
  await writeFileSync(DATABASE_URL, JSON.stringify(database), "utf-8");
  res.status(200).send({ message: "Successfully updated" });
};
