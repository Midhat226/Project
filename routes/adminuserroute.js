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

router.get('/delete/:ride_id', function(req, res) {
    var ride_id= req.params.ride_id;
      var sql = 'DELETE FROM ride_history WHERE ride_id = ?';
      db.query(sql, [ride_id], function (err, data) {
      if (err) throw err;
      console.log(data.affectedRows + " record(s) updated");
    });
    res.redirect('/admin_userview');
  });

module.exports = router;