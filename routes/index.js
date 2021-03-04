var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  const url = req.query.url
  const calls = req.query.calls
  const pass = req.query.passcode
  const fmt = req.query.fmt
  try {
    axios.get(url+"?calls="+calls+'&passcode='+pass+'&fmt='+fmt)
      .then(data => {
        res.status(200).send(data.data)
      })
  } catch (e){
    console.log(e)
  }
});

module.exports = router;
