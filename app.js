var express = require('express');

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
	res.render('index', {
		title: 'my website'
	});
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log('server listening at ' + port);