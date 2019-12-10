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

router.get("/",  (req,res) => {
    connection.connect(err=>{
        if(err){
            connection.close();
        } else {
            companies = req.body.companies;
            fetchData(connection,companies).then(list => {
                res.status(200).json(list);
              });
        }
    
    })
})

router.get("/:id", (req, res) => {
    id = req.params.id;
    connection.connect(err => {
      if (err) {
        connection.close();
      } else {
        fetchSingle(connection, id)
          .then(companies => {
            if (companies["recordset"].length != 0) {
              res.status(200).json(companies["recordset"][0]);
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


const fetchData = async (conn, term) => {
    try {
        let fcommand =
        "select * from company";
        let result1 = await conn.query(fcommand);
        conn.close();
        return { job: result1["recordset"]};
    } catch (e) {
        console.log(e);
        conn.close();
        throw e;
    }
};

  module.exports = router;

  const fetchSingle = async (conn, id) => {
    try {
      let result = await conn
        .request()
        .input("id", sql.Int, parseInt(id))
        .query("Select * from company Where company_ID = @id");
      conn.close();
      return result;
    } catch (e) {
      throw e;
    }
  };
  module.exports = router;