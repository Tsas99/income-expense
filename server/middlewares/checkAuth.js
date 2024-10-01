import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

export const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.status(404).send({ message: "Token not provided" });
    }
    const jwtToken = token.split(" ")[1];
    jwt.verify(jwtToken, process.env.SECRET, (error, decode) => {
      if (error) {
        throw new Error(error);
      }
      console.log({ decode });
      res.locals.userId = decode.userId;
      next();
      return;
    });
  } catch (error) {
    res.status(400).send({ messgae: error.message });
    return;
  }
};
