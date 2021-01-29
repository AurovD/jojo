const express = require("express");
const router = express.Router();
const Pool = require('pg').Pool
const pool = new Pool("postgres://postgres:123@194.58.121.72:5432/postgres");


router.get("/test", (req,res) => {
    console.log("test")
    pool.query('SELECT * FROM users', (err, result) => {
      if (err) {
           throw err;
      } else if (result) {
           res.send({
               "msg": "ok"
           });
        }
   });
});

module.exports = router;
