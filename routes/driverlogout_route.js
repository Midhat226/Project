var express = require('express');
var router = express.Router();
/* GET drivers listing. */
router.get('/driverlogout', function(req, res) {
  req.session.destroy();
  res.redirect('/driverlogin');
});
module.exports = router;