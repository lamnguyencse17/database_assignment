const express = require('express');
const router = express.Router();
const sql = require('mssql');


const config = {
    user: 'sa',
    password: 'miumap3008MM,',
    server: 'DESKTOP-0IM4SQU',
    database: 'assignment'
};

let connection = new sql.ConnectionPool(config);
let request = new sql.Request(connection);

connection.connect(err => {
    if (err) {
        console.log(err);
    }
    else {
    console.log("SUCESS");
    connection.close()
    }
});