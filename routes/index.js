import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import config from 'config';

var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/investigators', function(req, res, next) {
  res.locals.connection.query('SELECT * from Investigator', function (error, results, fields) {
		if(error) throw error;
			res.status(200).send(JSON.stringify(results));
	});
});

router.post('/login', function(req,res){
	let appData = {};
 	const email = req.body.email;
	const password = req.body.password;
	console.log(req.body);
	res.locals.connection.query(`SELECT * from Investigator where Email = '${email}'`, function (error, results, fields) {
		if (error){
			appData.error = 1;
 			appData["data"] = "Error Occured!";
 			res.status(400).json(appData);
		}else{
			if (results.length >0){
				if (results[0].Password_ == password){
					const userInfo = {
						Id: results[0].Id,
						Email: results[0].Email, 
						Name: results[0].Name_Investigator,

					}
					const token = jwt.sign(userInfo,config.secret,{expiresIn: "10h"});
					appData.error = 0;
					appData = {...appData, userInfo }
					appData["token"]= token;
					res.status(200).json(appData);
				}else{
					appData.error = 1;
					appData["data"] = 'Error en la contraseña';
					res.status(200).json(appData);
				}
			}else{
				appData.error = 1;
				appData["data"] = 'No existe el usuario';
				res.status(200).json(appData);
			}
		}

	});

});

module.exports = router;