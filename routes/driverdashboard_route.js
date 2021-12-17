var express = require('express');
var router = express.Router();
/* GET drivers listing. */
router.get('/driverdashboard', function(req, res, next) {
    if(req.session.loggedindriver){
        res.render('driverdashboard',{name:req.session.name})
    }else{
        res.redirect('/driverlogin');
    }
});
module.exports = router;