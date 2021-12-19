var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET users listing. */

router.get('/userhistory_ride', function(req, res, next) {
    var sessiondata=req.session;
    var sql='SELECT * FROM ride_history where user_user_name=?';
            db.query(sql,[req.session.user_name], function (err, results, fields) {
                var sql2='SELECT * FROM driver_history where ride_history_user_user_name=?';
                db.query(sql2,[req.session.user_name], function (err, results1, fields) {
                    var sql3='SELECT name  FROM driver,driver_history where driver.cnic=?';
                db.query(sql3,[results1[0].driver_cnic], function (err, results2, fields) {
                   
                      //  req.session.user_name= user_user_name;
            
                    console.log(results2);
                    res.render('userhistory_ride',{results, results2}); 
                });
                });
            });
    
});

module.exports = router;