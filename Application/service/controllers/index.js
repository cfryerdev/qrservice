var express = require('express')
  , router = express.Router()
 , utils = require('../common/utils')
  , qr = require('qr-image');


router.get('/api', function (req, res) {
    res.status(500).send('You must supply a code route param.');
});

router.get('/api/:code', function (req, res) {
    if (!utils.isDefined(req.params.code) || req.params.code == '')
    {
        res.status(500).send('You must supply a code route param.');
    }
    else {
        var code = qr.image(req.params.code, { type: 'png', size: 10 });
        res.type('png');
        code.pipe(res);
    }
});

router.post('/api', function (req, res) {
  if (!utils.isDefined(req.body) || req.body == {})
  {
      res.status(500).send('You must supply a post body.');
  }
  else {
      var json = JSON.stringify(req.body);
      var code = qr.image(json, { type: 'png', size: 10 });
      res.type('png');
      code.pipe(res);
  }
});

module.exports = router;
