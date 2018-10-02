import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import config from './config';
import apiRoutes from '../routes/index';
import mysql from 'mysql';

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('secretkey',config.secret);

//Database connection
app.use(function(req, res, next){
	res.locals.connection = mysql.createConnection({
		host     : config.host,
		user     : config.user,
		password : config.password,
		database : config.database
	});
	res.locals.connection.connect();
	next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// use morgan to log requests to the console
app.use(morgan('dev'));

app.disable('etag');
app.use('/api', apiRoutes)

app.get('*', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//app.use('/', index);

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