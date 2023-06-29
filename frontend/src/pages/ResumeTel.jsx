import { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentFormContext from "../components/CurrentFormContext";
import Layout from "../components/Layout";

function ResumeTel() {
  const { form } = useContext(CurrentFormContext);

  return (
    <Layout>
      <div className="border-2 rounded-lg border-quaternary px-3 m-5">
        <div className="flex justify-between items-center">
          <Link to="/enregistrer3">
            <img
              src="../public/assets/favicon/chevron.png"
              alt="précédent"
              className="pt-2"
            />
          </Link>
          <Link to="/home">
            <img src="../public/assets/favicon/croix.png" alt="Quitter" />
          </Link>
        </div>
        <h2 className="text-primary font-bold p-3">Résumé du smartphone</h2>
        <div className="flex p-2 justify-around">
          <ul>
            <li>Modèle : {form.modele}</li>
            <li>Marque : {form.marque}</li>
            <li>RAM : {form.ram_go}</li>
            <li>Stockage : {form.stockage_go}</li>
            <li>Etat : {form.etat}</li>
            <li>Aspect : {form.aspect}</li>
            <li>Reseau : {form.reseau}</li>
            <li>Vendu : {form.statut}</li>
            <li>Ville : {form.ville}</li>
            <li>Date d'entrée : {form.date_entree}</li>
            <li>Année : {form.annee_prod}</li>
            <li>Ecouteurs : {form.ecouteurs}</li>
            <li>Double sim : {form.double_sim}</li>
            <li>Commentaire : {form.commentaire}</li>
          </ul>
          <div className="flex flex-col justify-center items-center">
            <img src={form.image} alt={form.modele} />
            <h2 className="p-5 border text-center border-quinary shadow-lg rounded">
              Prix conseillé: <br />
              <span className="text-secondary font-blod">{form.prix} €</span>
            </h2>
            <button
              type="button"
              className="bg-tertiary text-quinary rounded-full w-32 mt-8"
            >
              Valider et enregistrer
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResumeTel;
