const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);
const app = express();
const corsOptions = {
  origin: "https://techyourtalentamsterdam.nl"
};

app.use(cors(corsOptions));
app.use(express.json());

// MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env["MYSQL_ADDON_HOST"],
  database: process.env["MYSQL_ADDON_DB"],
  user: process.env["MYSQL_ADDON_USER"],
  password: process.env["MYSQL_ADDON_PASSWORD"],
  port: process.env["MYSQL_ADDON_PORT"],
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

app.post("/signup", (req, res) => {
  console.log("Ontvangen gegevens:", req.body);
  const sql = "INSERT INTO gebruiker (`voornaam`, `achternaam`, `school`, `code`, `uitslag1`, `uitslag2`, `wachtwoord`, `akkoort_voorwaarden`) VALUES (?)";
  const wachtwoord = req.body.wachtwoord;

  bcrypt.hash(wachtwoord.toString(), saltRounds, (err, hash) => {
    console.log("bcrypt done");
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    
    const akkoort_voorwaarden = req.body.akkoort_voorwaarden === 'on' ? 1 : 0;
    const values = [
      req.body.voornaam,
      req.body.achternaam,
      req.body.school,
      req.body.code,
      req.body.uitslag1,
      req.body.uitslag2,
      hash,
      akkoort_voorwaarden,
    ];
    console.log("values gelezen");

    pool.query(sql, [values], (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
      }
      console.log("toegevoegd aan database");
      return res.json(data);
    });
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM gebruiker WHERE voornaam = ? AND achternaam = ? AND code = ?";
  pool.query(sql, [req.body.voornaam, req.body.achternaam, req.body.code], (err, data) => {
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
  });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
