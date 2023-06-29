import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useInfoMobile } from "../contexts/InfoMobileContext";

function ResumeTel() {
  const { mobile, handleSubmit } = useInfoMobile();
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
            <li>Modèle : {mobile.modele}</li>
            <li>Marque : {mobile.marque}</li>
            <li>RAM : {mobile.ram_go}</li>
            <li>Stockage : {mobile.stockage_go}</li>
            <li>Etat : {mobile.etat}</li>
            <li>Aspect : {mobile.aspect}</li>
            <li>Reseau : {mobile.reseau}</li>
            <li>taille d'écran : {mobile.taille_p}</li>
            <li>Ville : {mobile.ville}</li>
            <li>Date d'entrée : {mobile.date_entree}</li>
            <li>Année : {mobile.annee_prod}</li>
            <li>Ecouteurs : {mobile.ecouteurs}</li>
            <li>Double sim : {mobile.double_sim}</li>
            <li>Commentaire : {mobile.commentaire}</li>
          </ul>
          <div className="flex flex-col justify-center items-center">
            <img src="" alt="" />
            <h2 className="p-5 border text-center border-quinary shadow-lg rounded">
              Prix conseillé: <br />
              <span className="text-secondary font-blod">150 €</span>
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

// <Layout>
//   <div className="border-2 rounded-lg border-quaternary px-3 m-5">
//     <div className="flex justify-between items-center">
//       <Link to="/enregistrer3">
//         <img
//           src="./assets/favicon/chevron.png"
//           alt="précédent"
//           className="pt-2"
//         />
//       </Link>
//       <Link to="/home">
//         <img src="./assets/favicon/croix.png" alt="Quitter" />
//       </Link>
//     </div>
//     <h2 className="text-primary font-bold p-3">Résumé du smartphone</h2>
//     <div className="flex p-2 justify-around">
//       <ul>
//         <li>Modèle : {mobile.modele}</li>
//         <li>Marque : {mobile.marque}</li>
//         <li>RAM : {mobile.ram_go}</li>
//         <li>Stockage : {mobile.stockage_go}</li>
//         <li>Etat : {mobile.etat}</li>
//         <li>Aspect : {mobile.aspect}</li>
//         <li>Reseau : {mobile.reseau}</li>
//         <li>Vendu : {mobile.statut}</li>
//         <li>Ville : {mobile.ville}</li>
//         <li>Date d'entrée : {mobile.date_entree}</li>
//         <li>Année : {mobile.annee_prod}</li>
//         <li>Ecouteurs : {mobile.ecouteurs}</li>
//         <li>Double sim : {mobile.double_sim}</li>
//         <li>Commentaire : {mobile.commentaire}</li>
//       </ul>
//       <div className="flex flex-col justify-center items-center">
//         <img src={mobile.image} alt={mobile.modele} />
//         <h2 className="p-5 border text-center border-quinary shadow-lg rounded">
//           Prix conseillé: <br />
//           <span className="text-secondary font-blod">150 €</span>
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <button
//             type="submit"
//             className="bg-tertiary text-quinary rounded-full w-32 mt-8"
//           >
//             Valider et enregistrer
//           </button>
//         </form>
//       </div>
//     </div>{" "}
//   </div>
// </Layout>;
