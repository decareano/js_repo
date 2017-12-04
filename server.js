var express = require('express');

var app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');








app.get('/catnips', function(req, res) {
//   var err = new Error();
//   err.status = 404;
//   next(err);
// });
	res.render('form.ejs');
// handling 404 errors
// app.use(function(err, req, res, next) {
//   if(err.status !== 404) {
//     return next();
//   }

//   res.send(err.message || '** no unicorns here **');
});


app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3000);