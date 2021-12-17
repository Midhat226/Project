var express = require('express');
var router = express.Router();
var db=require('../database');
/* GET users listing. */

router.get('/admin_view', function(req, res, next) {

            var sql='SELECT * FROM admin';
            db.query(sql, function (err, results, fields) {
                console.log(results);
                res.render('admin_view',{results}); 
            });
    
});

module.exports = router;