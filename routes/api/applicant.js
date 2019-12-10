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

// Fetch All Data
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

// Fetch a single applicant
router.get("/:id", (req, res) => {
  id = req.params.id;
  connection.connect(err => {
    if (err) {
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


// Update an applicant password online
router.put("/:id", (req, res) => {
  id = req.params.id;
  connection.connect(err => {
    if (err) {
      res.status(400).json({message: "Can't connect to the server"});
      connection.close();
    } else {
      fetchSingle(connection, id)
        .then(applicant => {
          password = req.body.password? req.body.password : applicant.applicant_password;
          blog  = req.body.blog? req.body.blog : applicant.applicant_blog;
          name  = req.body.name? req.body.name : applicant.applicant_name;
        }).then(()=>{
          connection.connect(err => {
            if (err) {
              res.status(400).json({message: "Can't connect to the server"});
              connection.close();
            } else {
              updateData(connection,id, password, blog, name).then(result => {
                res.status(200).json({message: result});
              }).catch(e => {
              res.status(400).json({message: e});
              })
            }
          })
        })
      }
  })
})

// Delete an applicant
router.delete("/:id", (req, res) => {
  id = req.params.id;
  connection.connect(err => {
    if (err) {
      res.status(400).json({message: "Can't connect to the server"});
      connection.close();
    } else {
      deleteData(connection).then(result => {
        res.status(200).json({message: result});
      }).catch(e => {
        res.status(400).json({message: e});
      });
    }
})});




// Help Functions

//TODO: CHECK TOKEN
const updateData = async (conn,id,password, blog, name) => {
  try {
    let command1 =
      "update applicant set applicant_password = '" +
      password +
      "'   where applicant_ID = '" +
      id +
      "'";
    let command2 =
      "update applicant set applicant_blog = '" +
      blog +
      "' where applicant_ID = '" +
      id +
      "'";
    let command3 =
      "update applicant set applicant_name = '" +
      name +
      "' where applicant_ID = '" +
      id +
      "'";
    conn.query(command1).then(() => {
      conn.query(command2).then(() => {
        conn.query(command3).then(() => {
          conn.close();
        });
      });
    });
    
    
  } catch (e){
    console.log(e);
    throw(e);
    
  }
}

const deleteData = async conn => {
  try {
    let result = await conn.request().input("id", sql.Int, parseInt(id)).query("delete from applicant where applicant_ID = @id");
    conn.close()
    }
    catch (e){
      console.log(e)
      throw(e)
    }
}

const fetchData = async conn => {
  try {
    let result = await conn.query("Select * from applicant");
    conn.close();
    return result;
  } catch (e) {
    console.log(e);
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
