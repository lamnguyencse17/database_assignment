const express = require("express");
const router = express.Router();
const sql = require("mssql");

const config = {
  user: "sa",
  password: "123456",
  server: "DESKTOP-7I9O2BS\\TCTTSERVER",
  database: "assignment",
};

let connection = new sql.ConnectionPool(config);
let request = new sql.Request(connection);

router.post("/", (req, res) => {
  connection.connect(err => {
    if (err) {
      res.status(400).json({ message: "Can't connect to database" });
      connection.close();
    } else {
      term = req.body.term;
      fetchResults(connection, term)
        .then(result => {
          res.status(200).json(result);
        })
        .catch(e => {
          res.status(400).json({ message: "Something Went Wrong" });
        });
    }
  });
});

const fetchResults = async (conn, term) => {
  try {
    let fcommand =
      "select * from job where contains(job_name,'" + term.toString() + "')";
    let result1 = await conn.query(fcommand);
    let scommand =
      "select * from company where contains(company_name,'" +
      term.toString() +
      "')";
    let result2 = await conn.query(scommand);
    conn.close();
    return { job: result1, company: result2 };
  } catch (e) {
    console.log(e);
    conn.close();
    throw e;
  }
};
module.exports = router;
