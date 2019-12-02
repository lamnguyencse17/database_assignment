const express = require("express");
const router = express.Router();
const sql = require("mssql");
const jwt = require("jsonwebtoken");
const jwtconfig = require("./config");

const config = {
  user: "sa",
  password: "miumap3008MM,",
  server: "ZODIACULTRA",
  database: "assignment",
};

let connection = new sql.ConnectionPool(config);
let request = new sql.Request(connection);

router.post("/register", (req, res) => {
  connection.connect(err => {
    if (err) {
      connection.close();
    } else {
      applicant = {
        email: req.body.email,
        password: req.body.password,
      };
      createSingle(connection, applicant).then(result => {
        let token = jwt.sign({ email: email }, jwtconfig.secret, {
          expiresIn: "2h",
        });
        applicant = {
          email,
          token,
        };
        res.status(200).json({
          message: result,
          applicant,
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  connection.connect(err => {
    if (err) {
      connection.close();
    } else {
      applicant = {
        email: req.body.email,
        password: req.body.password,
      };
      fetchSingle(connection, applicant["email"]).then(check => {
        if (check["recordset"].length != 0) {
          check = check["recordset"][0];
          if (check["applicant_password"] == applicant["password"])
            if (verifyToken(req) == applicant["email"]) {
              res.status(200).json({ token: req.headers["authorization"] });
            } else {
              res.status(400).json({ message: "Invalid Token" });
            }
            else {
                res.status(400).json({ message: "Wrong Credential" });
            }
        } else {
          res.status(400).json({ message: "Wrong Credentials" });
        }
      });
    }
  });
});

const createSingle = async (conn, applicant) => {
  email = applicant["email"].toString();
  name = applicant["email"].toString();
  password = applicant["password"];
  let id = await conn.query("select count(*) from applicant");
  id = await parseInt(id["rowsAffected"][0]);
  try {
    let command =
      "insert into applicant (applicant_ID, applicant_name, applicant_email, applicant_password) values(" +
      id.toString() +
      ",'" +
      name +
      "','" +
      email +
      "','" +
      password +
      "')";
    let result = await conn.query(command);
    conn.close();
    return result;
  } catch (e) {
    throw e;
  }
};

const fetchSingle = async (conn, email) => {
  try {
    let result = await conn
      .request()
      .input("email", sql.Text, email.toString())
      .query("Select * from applicant Where applicant_email like @email");
    conn.close();
    return result;
  } catch (e) {
    throw e;
  }
};

const verifyToken = req => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  var mail = "";
  if (token) {
    jwt.verify(token, jwtconfig.secret, (err, decoded) => {
      if (err) {
        return "invalid";
      } else {
        mail = decoded.email;
      }
    });
    return mail;
  } else {
    return "invalid";
  }
};

module.exports = router;
