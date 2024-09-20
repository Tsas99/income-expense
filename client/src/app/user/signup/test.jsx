const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.post("/api/users/signup", (req, res) => {
  const newUser = req.body;

  // Read current users from db.json
  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) return res.status(500).send(err);

    const db = JSON.parse(data);
    db.users.push(newUser); // Add new user

    // Write back to db.json
    fs.writeFile("db.json", JSON.stringify(db, null, 2), (err) => {
      if (err) return res.status(500).send(err);
      res.status(201).send(newUser); // Respond with created user
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
