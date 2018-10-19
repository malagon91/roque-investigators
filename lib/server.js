import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import multipart from 'connect-multiparty'
import config from './config';
import userRoutes from '../routes/index';
import configRoutes from '../routes/config';
import mysql from 'mysql';

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');
app.set('secretkey',config.secret);

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

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(multipart());// add multipart to get info from form-data

app.use(cors());
app.use(morgan('dev'));

app.disable('etag');
app.use('/api', userRoutes)
app.use('/api', configRoutes)


app.get('*', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
  });

app.listen(config.port),function listenHandler(){
	console.info(`Running on port ${config.port}`);
};