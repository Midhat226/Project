var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/userlogout', function(req, res) {
  req.session.destroy();
  res.redirect('/userlogin');
});
module.exports = router;