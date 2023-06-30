
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useInfoMobile } from "../contexts/InfoMobileContext";
import Loading from "../components/Loading";

import parametresPrix from "../services/parametresPrix";

function ResumeTel() {
  const { mobile, handleSubmit, setMobile } = useInfoMobile();
  const [isLoading, setIsLoading] = useState(true);
  let nextCategorie = 0;

  const basePoints =
    parametresPrix.ram_go[parseInt(mobile.ram_go, 10)] +
    parametresPrix.stockage_go[parseInt(mobile.stockage_go, 10)] +
    parametresPrix.aspect[mobile.aspect] +
    parametresPrix.reseau[parseInt(mobile.reseau[0], 10)] +
    parametresPrix.ecouteurs[mobile.ecouteurs];

  const remise = Math.min(100, parametresPrix.etat[mobile.etat]);

  const points = Math.floor(basePoints * (1 - remise / 100));

  if (points >= Number(Object.keys(parametresPrix.categorie)[4])) {
    nextCategorie =
      parametresPrix.categorie[Object.keys(parametresPrix.categorie)[4]];
  } else if (points >= Object.keys(parametresPrix.categorie)[3]) {
    nextCategorie =
      parametresPrix.categorie[Object.keys(parametresPrix.categorie)[3]];
  } else if (points >= Object.keys(parametresPrix.categorie)[2]) {
    nextCategorie =
      parametresPrix.categorie[Object.keys(parametresPrix.categorie)[2]];
  } else if (points >= Object.keys(parametresPrix.categorie)[1]) {
    nextCategorie =
      parametresPrix.categorie[Object.keys(parametresPrix.categorie)[1]];
  } else {
    nextCategorie =
      parametresPrix.categorie[Object.keys(parametresPrix.categorie)[0]];
  }
  useEffect(() => {
    const nextMobile = mobile;
    nextMobile.prix = parametresPrix.prix[nextCategorie];
    setMobile(nextMobile);
    setIsLoading(false);
  }, [nextCategorie]);

  if (isLoading) return <Loading />;

  return (
    <Layout>
      <div className="border-2 rounded-lg border-quaternary px-3 m-5">
        <div className="flex justify-between items-center pt-4">
          <Link to="/enregistrer3">
            <img
              src="../public/assets/favicon/chevron.png"
              alt="précédent"
              className="pt-2"
            />
          </Link>
          <img src="./src/assets/head.png" alt="head" className="w-20" />
          <Link to="/home">
            <img src="../public/assets/favicon/croix.png" alt="Quitter" />
          </Link>
        </div>
        <h2 className="text-primary font-bold p-3">Résumé du smartphone</h2>
        <div className="flex p-2 justify-around">
          <ul>
            <li>
              Modèle : <span className="font-bold">{mobile.modele}</span>
            </li>
            <li>
              Marque : <span className="font-bold">{mobile.marque}</span>
            </li>
            <li>
              RAM : <span className="font-bold">{mobile.ram_go}</span>
            </li>
            <li>
              Stockage : <span className="font-bold">{mobile.stockage_go}</span>
            </li>
            <li>
              Etat : <span className="font-bold">{mobile.etat}</span>
            </li>
            <li>
              Aspect : <span className="font-bold">{mobile.aspect}</span>
            </li>
            <li>
              Reseau : <span className="font-bold">{mobile.reseau}</span>
            </li>
            <li>
              Vendu : <span className="font-bold">{mobile.statut}</span>
            </li>
            <li>
              Ville : <span className="font-bold">{mobile.ville}</span>
            </li>
            <li>
              Date d'entrée :{" "}
              <span className="font-bold">{mobile.date_entree}</span>
            </li>
            <li>
              Année : <span className="font-bold">{mobile.annee_prod}</span>
            </li>
            <li>
              Ecouteurs : <span className="font-bold">{mobile.ecouteurs}</span>
            </li>
            <li>
              Double sim :{" "}
              <span className="font-bold">{mobile.double_sim}</span>
            </li>
            <li>
              Commentaire :{" "}
              <span className="font-bold">{mobile.commentaire}</span>
            </li>
          </ul>
          <div className="flex flex-col justify-center items-center">
            {/* <img src={mobile.image} alt={mobile.modele} /> */}
            <h2 className="p-5 border text-center border-quinary shadow-lg rounded">
              Prix conseillé: <br />
              <span className="text-secondary font-blod">{mobile.prix} €</span>
            </h2>
            <form onSubmit={handleSubmit}>
              <button
                type="submit"
                className="bg-tertiary text-quinary rounded-full w-32 mt-8"
              >
                Valider et enregistrer
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResumeTel;
