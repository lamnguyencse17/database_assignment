const express = require("express");
const router = express.Router();
const sql = require("mssql");

const config = {
  user: "sa",
  password: "miumap3008MM,",
  server: "ZODIACULTRA",
  database: "assignment",
};

let connection = new sql.ConnectionPool(config);
let request = new sql.Request(connection);

router.get("/",  (req,res) => {
    connection.connect(err=>{
        if(err){
            connection.close();
        } else {
            jobs = req.body.jobs;
            fetchJobs(connection,jobs).then(list => {
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
          .then(result => {
            if (result.job["recordset"].length != 0) {
              result.job["recordset"][0].company = result.company["recordset"][0]
              res.status(200).json(result.job["recordset"][0]);

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


const fetchJobs = async (conn, term) => {
    try {
        let fcommand =
        "select top " +term+ " * from job where  job_status = 1";
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
        .query("Select * from job Where job_ID = @id")
        try{
          command = "Select * from company  where company_ID like '" + result["recordset"][0].company_ID +"'";
          result2 = await conn.query(command)
          
        }
        catch (er) {
          throw er;
        }
            
        conn.close();
      return {job: result, company: result2};
    } catch (e) {
      throw e;
    }
  };

  const fetchCompany = async (conn, id) => {
    
    try {
      let result = await conn
        .request()
        .input("id", sql.Int, parseInt(id))
        .query("Select * from company Where company_ID = @id")
        conn.close();
      return result;
    } catch (e) {
      throw e;
    }
  };