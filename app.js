var express = require('express');

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
	res.render('index', {
		title: 'my website'
	});
});

app.listen(3000);
console.log('server listening at blablibla');