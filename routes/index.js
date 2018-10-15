import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import path from 'path';
import sharp from 'sharp';
import fs from 'fs';
import config from './../lib/config';
import middleware from './../lib/middleware';
import {checkIffileExists} from './../lib/utils';

var router = express.Router();

router.get('/investigators', function(req, res, next) {
  res.locals.connection.query('SELECT Id,Name_Investigator,Title,Institution,Depto,Address,Url,Email,Phone,Info,isAdmin from Investigator', function (error, results, fields) {
		if(error) throw error;
			res.status(200).json(results);
	});
});

router.get('/investigator/:id',middleware.checkToken, function(req, res) {
	const id =  req.params.id;
	const object_error= {};
	res.locals.connection.query("select Id,Name_Investigator,Title,Institution,Depto,Address,Url,Email,Phone,Info,isAdmin from Investigator where Id = ?",[id] ,function(error,results,fields){
		if(error){
			object_error["message"] = 'Error getting the investigator';
			res.status(500).json(object_error);
		}else{
			const existImage = checkIffileExists(`${config.profile_photo_path}${results[0].Id}_profile.jpg`);
			const resume = {...results[0], existImage: existImage};
			res.status(200).json(resume);
		}
	});
});

router.post('/user',middleware.checkToken, function(req,res){
	let appData = {};
	let user = req.body;
	const hashedPassword =bcrypt.hashSync(user.Password_, config.salt_rounds);
	user = {...user, Password_: hashedPassword}
	res.locals.connection.query("insert into Investigator set ?", user, function(error,results,fields){
		if (error){
			appData = {success:false, message: "Error to insert the user"};
			res.status(400).json(appData);
		}else{
			appData = {success:true, message: "insert was successfully"};
			res.status(200).json(appData);
		}
});
});

router.put('/user',middleware.checkToken, function(req,res){
	let appData = {};
	const user = req.body;
	console.log(user);
	res.locals.connection.query("update Investigator set ? where Id = ?", [user, user.Id], function(error,results,fields){
		if (error){
			appData = {success:false, message: "Error to update the user"};
			res.status(500).json(appData);
			console.log(error)
		}else{
			appData = {success:true, message: "update was successfully"};
			res.status(200).json(appData);
		}
});
});


router.delete('/user/:id', middleware.checkToken,function(req,res){
	const id = req.params.id;
	let appData ={};
	res.locals.connection.query("delete from Investigator where Id = ?",[id],function(error,results,fields){
		if(error){
			appData = {success:false, message:`Error deleting the user ${id}`};
			res.status(400).json(appData);
		}else{
			appData = {success:true, message:"Deleting was successfully"};
			res.status(200).json(appData);
		}
	});
});

router.post('/profilepic', function(req,res){
	let appData = {};
	const tmp_path = req.files.file.path;
	const id_user = req.body.Id;
	const target_image =`${config.profile_photo_path}${id_user}_profile.jpg`;
	sharp(tmp_path)
		.resize(config.profile_width, config.profile_height)
		.toFile(target_image, (error, info) => {
				if (error) {
					appData = {
						success: false,
						message: "Error updating the photo"
					};
					res.status(200).json(appData);
				} else {
					fs.unlink(tmp_path, (err) => {
							if (err) {
								appData = {
									success: true,
									message: "The info was updated with errors"
								}
							} else {
								appData = {
									success: true,
									message: "The process was completed successfully "
								}
							}
							res.status(200).json(appData);
						})
					}
				})
	})
router.post('/login', function(req,res){
	let appData = {};
 	const email = req.body.email;
	const password = req.body.password;
	res.locals.connection.query(`SELECT Id,Name_Investigator,Title,Institution,Depto,Address,Url,Email,Password_,Phone,Info,isAdmin from Investigator where Email = '${email}'`, function (error, results, fields) {
		if (error){
			appData = {success: false, message: "Error Occured!"};
 			res.status(400).json(appData);
		}else{
			if (results.length >0){
				bcrypt.compare(password,results[0].Password_, (err,response)=>{
					if (response){
						let userInfo = {
							Id: results[0].Id,
							Email: results[0].Email,
							Name: results[0].Name_Investigator,

						}
						const token = jwt.sign(userInfo,config.secret,{expiresIn: "10h"});
						appData = {success: true, message: "Login successfully"};
						userInfo = {...userInfo, token: token}
						let resume = results[0];
						const existImage = checkIffileExists(`${config.profile_photo_path}${results[0].Id}_profile.jpg`);
						delete resume.Password_;
						resume = {...resume, existImage: existImage};
						appData = {...appData, userInfo, resume: resume }
						res.status(200).json(appData);
					}else{
						appData = {success: false, message: "Error en la contraseña"};
						res.status(200).json(appData);
					}
			});
			}else{
				appData = {success: false, message: "No existe el usuario"};
				res.status(200).json(appData);
			}
		}

	});

});

module.exports = router;