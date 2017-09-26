var express = require('express');
var router = express.Router();

var lieuController = require('../controllers/lieuController');

//GET all lieu
router.get('/',lieuController.lieu_list);

//GET specific lieu
router.get('/:id',lieuController.lieu_detail);

//POST one lieu
router.post('/',lieuController.lieu_ajout_post);

module.exports = router;