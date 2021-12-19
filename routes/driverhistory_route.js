var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET users listing. */

router.get('/driver_history', function(req, res, next) {
    var sessiondata=req.session;
    var sql='SELECT * FROM driver_history where driver_cnic=?';
            db.query(sql,[req.session.cnic], function (err, results, fields) {
               
                    console.log(results);
                    res.render('driver_history',{results}); 
              
            });
});


module.exports = router;