var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET users listing. */

router.get('/admin_driverview', function(req, res, next) {

    var sql='SELECT * FROM driver,driver_history where driver.cnic=driver_history.driver_cnic';
            db.query(sql, function (err, results, fields) {
                console.log(results);
                res.render('admin_driverview',{results}); 
            });
    
});

module.exports = router;