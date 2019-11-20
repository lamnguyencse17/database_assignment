const express = require("express");
const router = express.Router();
const sql = require("mssql");

const config = {
  user: "sa",
  password: "miumap3008MM,",
  server: "DESKTOP-0IM4SQU",
  database: "assignment"
};

let connection = new sql.ConnectionPool(config);
let request = new sql.Request(connection);

router.get("/", (req, res) => {
  connection.connect(err => {
    if (err) {
      console.log(err);
      connection.close();
    } else {
      fetchData(connection).then(list => {
        res.status(200).json(list["recordset"]);
      });
    }
  });
});

router.get("/:id", (req, res) => {
  id = req.params.id;
  connection.connect(err => {
    if (err) {
      console.log(err);
      connection.close();
    } else {
      fetchSingle(connection, id)
        .then(applicant => {
          if (applicant["recordset"].length != 0) {
            res.status(200).json(applicant["recordset"][0]);
          } else {
            res.status(400).json({ message: "No such ID in database" });
          }
        })
        .catch(err => {
          res.status(400).json({ message: err });
        });
    }
  });
});

const fetchData = async conn => {
  try {
    let result = await conn.query("Select * from applicant");
    conn.close();
    return result;
  } catch (e) {
    throw e;
  }
};

const fetchSingle = async (conn, id) => {
  try {
    let result = await conn
      .request()
      .input("id", sql.Int, parseInt(id))
      .query("Select * from applicant Where applicant_ID = @id");
    conn.close();
    return result;
  } catch (e) {
    throw e;
  }
};

module.exports = router;
