class Offres {

    constructor(id, libelle, date, heure){
        this._id = id;
        this._libelle = libelle;
        this._date = date;
        this._heure = heure;
    }
    get libelle() {
        return this._libelle;
    }
    get heure() {
        return this._heure;
    }
    get date() {
        return this._date;
    }
    get id() {
        return this._id;
    }

}
module.exports = Offres;