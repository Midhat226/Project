const express = require('express');
const path = require('path');
const app = express();
var session = require('express-session');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(session({ 
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
//for body parser
app.use(express.urlencoded({extended:false}));

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//template engine
app.set('views',path.join(__dirname,'views'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


var indexRouter = require('./routes/index');
var UserregistrationRouter = require('./routes/userregistration_route');
var UserloginRouter = require('./routes/userlogin_route');
var UserdashboardRouter = require('./routes/userdashboard_route');
var UserlogoutRouter = require('./routes/userlogout_route');
var contactusRouter = require('./routes/contactus_route');
var adminloginRouter = require('./routes/adminlogin_route');
var adminlogoutRouter = require('./routes/adminlogout_route');
var admindashboardRouter = require('./routes/admindashboard_route');
var bookrideRouter = require('./routes/book_ride_route');
var driverregisterRouter = require('./routes/driverregister_route');
var driverloginRouter = require('./routes/driverlogin_route');
var driverdashboardRouter = require('./routes/driverdashboard_route');
var driverlogoutRouter = require('./routes/driverlogout_route');
//var boardingpassRouter = require('./routes/boardingpass_route');
var adminviewRouter = require('./routes/adminviewroute');
var adminuserviewRouter = require('./routes/adminuserroute');
var admindriverviewRouter = require('./routes/admindriverroute');
var userhistoryRouter = require('./routes/userhistory_route');
var driverhistoryRouter = require('./routes/driverhistory_route');
var cancelRide = require('./routes/cancelride_route');
var confirmRide = require('./routes/confirmride_route');


app.use('/', driverregisterRouter);
app.use('/', driverloginRouter);
app.use('/', driverdashboardRouter);
app.use('/', driverlogoutRouter);
app.use('/', UserregistrationRouter);
app.use('/', UserloginRouter);
app.use('/', UserdashboardRouter);
app.use('/', UserlogoutRouter);
app.use('/', contactusRouter);
app.use('/', adminloginRouter);
app.use('/', adminlogoutRouter);
app.use('/', admindashboardRouter);
app.use('/', bookrideRouter);
app.use('/', adminviewRouter);
app.use('/', adminuserviewRouter);
app.use('/', admindriverviewRouter);
app.use('/', userhistoryRouter);
app.use('/', driverhistoryRouter);
app.use('/',cancelRide);
app.use('/',confirmRide);
app.use('/',indexRouter);

//setting up server
app.listen(3000,()=>{
    console.log ('Server started on port 3000');
});

module.exports=app;
