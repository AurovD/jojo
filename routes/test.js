const express = require("express");
const router = express.Router();
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: '194.58.121.72',
    database: 'postgres',
    port: 5432,
});


router.get("/test", (req,res) => {
	console.log("test");
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
