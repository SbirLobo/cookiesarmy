import { useContext } from "react";
import { Link } from "react-router-dom";
import CurrentFormContext from "../components/CurrentFormContext";
import Layout from "../components/Layout";

function ResumeTel() {
  const { form } = useContext(CurrentFormContext);
  return (
    <Layout className="border-2 rounded-lg border-quaternary px-3 m-5">
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
        <ul className="list-none">
          <li>Modèle :</li>
          <li>Marque : </li>
          <li>RAM : </li>
          <li>Stockage : </li>
          <li>Etat : </li>
          <li>Aspect : </li>
          <li>Reseau : </li>
          <li>Vendu : </li>
          <li>Ville : </li>
          <li>Date d'entrée : </li>
          <li>Année : </li>
          <li>Ecouteurs : </li>
          <li>Double sim : </li>
          <li>Commentaire : </li>
        </ul>

        <ul className="list-none">
          <li>{form.modele}</li>
          <li>{form.marque}</li>
          <li>{form.ram_go}</li>
          <li>{form.stockage_go}</li>
          <li>{form.etat}</li>
          <li>{form.aspect}</li>
          <li>{form.reseau}</li>
          <li>{form.statut}</li>
          <li>{form.ville}</li>
          <li>{form.date_entree}</li>
          <li>{form.annee_prod}</li>
          <li>{form.ecouteurs}</li>
          <li>{form.double_sim}</li>
          <li>{form.commentaire}</li>
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
    </Layout>
  );
}

export default ResumeTel;
