// import { DATABASE_URL } from "./constant.js";
import { readFileSync } from "fs";

export const getDatabase = async () => {
  const JsonResult = await readFileSync(DATABASE_URL, "utf-8");
  const database = JSON.parse(JsonResult);

  return database;
};
