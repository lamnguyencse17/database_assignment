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

// Create a new applicant
router.post("/", (req, res) => {
  connection.connect(err => {
    if (err) {
      connection.close();
    } else {
      applicant = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      };
      createSingle(connection, applicant).then(result => {
        res.status(200).json({
          message: result,
          applicant,
        });
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
  let password = req.body.password;
  let email = req.body.email
  connection.connect(err => {
    if (err) {
      res.status(400).json({message: "Can't connect to the server"});
      connection.close();
    } else {
      updateData(connection, password, email).then(result => {
        res.status(200).json({message: result});
      }).catch(e => {
        res.status(400).json({message: e});
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
const updateData = async (conn,password, email) => {
  try {
    command = "update applicants set applicant_password='" + password + "' where applicant_email = '" + email + "'";
    let result = await conn.query(command);
    conn.close();
  } catch (e){
    console.log(e);
    conn.close();
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
      conn.close()
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

const createSingle = async (conn, applicant) => {
  email = applicant["email"].toString();
  name = applicant["name"];
  password = applicant["password"];
  let id = await conn.query("select count(*) from applicant");
  id = await parseInt(id['rowsAffected'][0])
  try {
    let command =
      "insert into applicant (applicant_ID, applicant_name, applicant_email) values(" +
      id.toString() +
      ",'" +
      name +
      "','" +
      email +
      "','" +
      password 
      "')";
    let result = await conn.query(command);
    conn.close();
    return result;
  } catch (e) {
    throw e;
  }
};

module.exports = router;
