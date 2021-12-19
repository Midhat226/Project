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

router.get('/delete/:password', function(req, res) {
    var password= req.params.password;
      var sql = 'DELETE FROM admin WHERE password = ?';
      db.query(sql, [password], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) updated");
    });
    res.redirect('/admin_view');
  });


module.exports = router;