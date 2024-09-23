import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  const jwtToken = token.split("")[1];
  console.log("gg");

  jwt.verify(jwtToken, process.env.SECRET, (res, err) => {
    if (err) {
      res.status(401).send({ message: "Invalid token provide" });
      return;
    } else {
      next();
      return;
    }
  });
  console.log(isValid);
  if (isValid) {
    next();
    return;
  }
  res.status(401).send({ message: "Invalide token provide" });
};
