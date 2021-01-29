const express = require("express");
const router = express.Router();
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'dima',
    host: '194.58.121.72',
    database: 'postgres',
    password: '123',
    port: 5432,
});


router.get("/test", (req,res) => {
<<<<<<< HEAD
    console.log("test")
=======
	console.log("test");
>>>>>>> dad61038428cd65ed50dd0990f25c5e4115ffadd
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
