const express = require('express');
const router = express.Router();
const newscontroller = require('../app/controllers/Billscontrollers');
router.get('/:id', newscontroller.show);
router.get('/', newscontroller.index);
module.exports = router;
