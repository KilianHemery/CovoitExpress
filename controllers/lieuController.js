var Lieu = require('../models/lieu');

// Display list of all Offres
exports.lieu_list = function(req, res, next) {
    let listeLieux = Lieu.getLesLieuxJSON();

    res.render('Lieu/lieu', { title: 'Gestion des lieux',listeLieux : listeLieux });
};
// Display detail page for a specific Offre
exports.lieu_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Detail lieu id : ' + req.params.id);
};

// Handle Offre create on POST
exports.lieu_ajout_post = function(req, res) {
    res.send('NOT IMPLEMENTED: lieu create POST');
};