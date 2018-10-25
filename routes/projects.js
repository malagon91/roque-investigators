import express from 'express';
import middleware from './../lib/middleware';


var router = express.Router();
// get all projects
router.get('/projects/:limit/:start', (req, res) => {
	let appData = {};
	const limit = req.params.limit;
	const start = req.params.start;
	res.locals.connection.query(
		`select p.Id, p.Title, p.Resume_, p.Url, p.Date_, I.Name_Investigator from Publication p Inner join Investigator I on (P.IdUSer = I.Id)  order by p.Date_ desc limit ${limit} offset ${start}`,
		  (error, results, fields) => {
				if (error) {
					appData = { success: false, message: 'Internal error' }
					res.status(500).json(appData);
				} else {
					appData = {
						success: true,
						message: 'the information was completed',
						data: results,
					}
					res.status(200).json(appData);
				}
	});
});
// Get projects by user
router.get('/project/:id', middleware.checkToken, (req, res) => {
	const Id_ = req.params.id;
	let appData = {};
	res.locals.connection.query('select Id, Title, Resume_, Url, Date_ from Publication where IdUSer = ? order by Date_ desc',[Id_], (error,results,fields) =>{
		if (error) {
			appData = { success: false, message: 'Internal error' }
			res.status(500).json(appData);
		} else {
			appData = {
				success: true,
				message: 'The information was completed',
				data: results,
			}
			res.status(200).json(appData);
		}
	})
});
//Post crear new project by user
router.post('/project', middleware.checkToken, (req, res) => {
	let model = req.body;
	let appData = {};

	res.locals.connection.query('insert into Publication set ?', model, (error, result, fields)=>{
		if (error) {
			console.log(error)
			appData = { success: false, message: 'Internal error' }
			res.status(500).json(appData);
		} else {
			appData = {
				success: true,
				message: 'The new record was saved',
			}
			res.status(200).json(appData);
		}
	})
});
// PUT Update project
router.put('/project', middleware.checkToken, (req, res) => {
	let model = req.body;
	let appData = {};
	res.locals.connection.query('update Publication set ? where Id = ?',[model, model.Id], (error,result, fields) => {
		if (error) {
			console.log(error)
			appData = { success: false, message: 'Internal error' }
			res.status(500).json(appData);
		} else {
			appData = {
				success: true,
				message: 'The information was saved',
			}
			res.status(200).json(appData);
		}
	})
});
// Delete project
router.delete('/project/:id', middleware.checkToken, (req, res) => {
	let id = req.params.id;
	let appData = {};
	res.locals.connection.query('delete from Publication where Id = ?', id, (error,result, fields) => {
		if (error) {
			appData = { success: false, message: 'Internal error' }
			res.status(500).json(appData);
		} else {
			appData = {
				success: true,
				message: 'The information was saved',
			}
			res.status(200).json(appData);
		}
	})
});

module.exports = router;