var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/loginY', function(req, res){
  if(req.body.userName == "Simon" && req.body.password == "kodeord"){
    res.cookie('yourUsername', req.body.userName);
    res.end("Du er logget ind");
  }else{
    res.send("Login mislykkedes")
  }
});

module.exports = router;
