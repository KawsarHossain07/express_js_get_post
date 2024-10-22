var express = require('express');
var router = express.Router();

let userData = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/postuser',function(req,res){
  const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.json({
            error: 'All fields are required.'
        });
      }

      userData.push({ name, email, message });

      res.json({
          data: {
              name,
              email,
              message
          }
      });
    });

    router.get('/getuser', (req, res) => {
      if (userData.length === 0) {
          return res.json({
              message: 'No data found.'
          });
      }
      res.json({
          data: userData 
      });
  });


module.exports = router;
