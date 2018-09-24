import express from 'express';
import config from './config';
import index from '../routes/index';
import mysql from 'mysql';

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'usa00',
		database : 'Investigators'
	});
	res.locals.connection.connect();
	next();
});

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
  });
// app.get('/', (req, res) => {
// 	res.render('index',{answer: 42});
// });

app.listen(config.port),function listenHandler(){
	console.info(`Running on port ${config.port}`);
};