var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET users listing. */

router.get('/admin_userview', function(req, res, next) {

    var sql='SELECT * FROM user,ride_history where user.user_name=ride_history.user_user_name';
            db.query(sql, function (err, results, fields) {
                console.log(results);
                res.render('admin_userview',{results}); 
            });
    
});

module.exports = router;