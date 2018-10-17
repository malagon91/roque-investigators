import express from 'express';
import middleware from './../lib/middleware';


var router = express.Router();

router.get('/config',  middleware.checkToken, (req, res, next) => {
  let appData = {};
  res.locals.connection.query('select DefaultPsw from config ORDER BY Id ASC LIMIT 1',  (error, results, fields) => {
		if(error) {
      appData = {
        success: false,
        message: "Error saving the new password"
      };
      res.status(500).json(appData);
    }else
      res.status(200).json(results[0]);
	});
});

router.put('/config', middleware.checkToken,  (req, res) => {
  let appData = {};
  const password = req.body.Password_;
  res.locals.connection.query("update Config set DefaultPsw= ? ORDER BY Id ASC LIMIT 1", [password], (error, results, fields) => {
    if (error) {
      appData = {
        success: false,
        message: "Error saving the new password"
      };
      res.status(500).json(appData);
    } else {
      appData = {
        success: true,
        message: "update was successfully"
      };
      res.status(200).json(appData);
    }
  });
});

module.exports = router;