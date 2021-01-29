const express = require("express");
const router = express.Router();
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123',
    port: 5432,
});


router.get("/test", (req,res) => {
    console.log("test")
    pool.query('SELECT * FROM books', (err, result) => {
      if (err) {
           throw err;
      } else if (result) {
          console.log("jhkhl")
           res.send({
               "msg": "ok"
           });
        }
   });
});

module.exports = router;
