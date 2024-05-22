const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const salt = 10;

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "database_tyt",
});

app.post("/signup", (req, res) => {
  const sql =
    "INSERT INTO gebruiker (`voornaam`, `achternaam`, `school`, `code`, `uitslag1`, `uitslag2`, `wachtwoord`, `akkoort_voorwaarden`) Values (?)";
  const wachtwoord = req.body.wachtwoord;
  bcrypt.hash(wachtwoord.toString(), salt, (err, hash) => {
    if (err) {
      console.log(err);
    }
    const values = [
      req.body.voornaam,
      req.body.achternaam,
      req.body.school,
      req.body.code,
      req.body.uitslag1,
      req.body.uitslag2,
      hash,
      req.body.akkoort_voorwaarden,
    ];
    db.query(sql, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  });
});

app.post("/login", (req, res) => {
    const sql =
      "SELECT * FROM gebruiker WHERE voornaam = ? AND achternaam = ? AND code = ?";
    db.query(
      sql,
      [req.body.voornaam, req.body.achternaam, req.body.code],
      (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Internal server error" });
        }
  
        if (data.length === 0) {
          return res.status(401).json({ error: "User not found" });
        }
  
        const hashedPassword = data[0].wachtwoord;
  
        bcrypt.compare(req.body.wachtwoord, hashedPassword, (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
          }
          if (result) {
            return res.json({ success: "Login successful" });
          } else {
            return res.status(401).json({ error: "Incorrect credentials" });
          }
        });
      }
    );
  });  

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

