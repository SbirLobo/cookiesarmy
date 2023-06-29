const AbstractManager = require("./AbstractManager");

class MobileManager extends AbstractManager {
  constructor() {
    super({ table: "mobile" });
  }

  insert(mobile) {
    return this.database.query(
      `insert into ${this.table} (modele, marque, ram_go, stockage_go, etat, aspect, couleur, taille_p, reseau, ville, date_entree, ecouteurs, double_sim, commentaire, prix) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        mobile.modele,
        mobile.marque,
        mobile.ram_go,
        mobile.stockage_go,
        mobile.etat,
        mobile.aspect,
        mobile.couleur,
        mobile.taille_p,
        mobile.reseau,
        mobile.ville,
        mobile.date_entree,
        mobile.ecouteurs,
        mobile.double_sim,
        mobile.commentaire,
        mobile.prix,
      ]
    );
  }

  update(mobile) {
    return this.database.query(
      `update ${this.table} set modele = ?, marque = ?, ram_go = ?, stockage_go = ?, etat = ?, aspect = ?, couleur = ?, taille_p = ?, reseau = ?, ville = ?, date_entree = ?, ecouteurs = ?, double_sim = ?, commentaire = ?, prix = ? where id = ?`,
      [
        mobile.modele,
        mobile.marque,
        mobile.ram_go,
        mobile.stockage_go,
        mobile.etat,
        mobile.aspect,
        mobile.couleur,
        mobile.taille_p,
        mobile.reseau,
        mobile.ville,
        mobile.date_entree,
        mobile.ecouteurs,
        mobile.double_sim,
        mobile.commentaire,
        mobile.prix,
        mobile.id,
      ]
    );
  }
}

module.exports = MobileManager;
