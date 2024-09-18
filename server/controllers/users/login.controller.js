export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const resultJson = await readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);

  const user = result.users.find((el) => {
    return el.email === email;
  });
  if (!user) {
    res.status(400).send("not registered");
    return;
  }
  const match = await bcrypt.compare(password, user.hashedPassword);
  if (!match) {
    res.status(400).send("not registered");
    return;
  }
  res.status(200).send("Registered");
};
