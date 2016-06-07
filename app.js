var express = require('express');
var bodyParser = require('body-parser');
var app = express();


// set view engine
app.set('view engine', 'ejs');


//use middleware bodyParser
app.use(bodyParser());

// use public as public folder
app.use('/public', express.static(__dirname + '/public'));



// render pages
app.get('/', function(req, res){
  res.render('pages/index');
});




// listen to port 3000
app.listen(3000, function(){

console.log('app listening to port 3000!')

});
