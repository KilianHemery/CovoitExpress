let express = require('express');
let router = express.Router();

let lieuController = require('../controllers/lieuController');

//GET all lieu
router.get('/',lieuController.lieu_list);

//GET specific lieu
router.get('/:id',lieuController.lieu_detail);

//POST one lieu
router.post('/ajoutLieu',lieuController.lieu_ajout_post);

module.exports = router;