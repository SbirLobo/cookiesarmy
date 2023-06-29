import data from "../Data/data";

function ResumeTel() {
  return (
    <div className="border-2 rounded-lg border-quaternary px-3 m-5">
      <div className="flex justify-between items-center">
        <img
          src="../public/assets/favicon/chevron.png"
          alt="précédent"
          className="pt-2"
        />
        <img src="../public/assets/favicon/croix.png" alt="Quitter" />
      </div>
      <h2 className="text-primary font-bold p-3">Résumé du smartphone</h2>
      <div className="flex p-2 justify-around">
        <lu className="list-none">
          <li>Modèle :</li>
          <li>Marque : </li>
          <li>RAM : </li>
          <li>Stockage : </li>
          <li>Etat : </li>
          <li>Aspect : </li>
          <li>Reseau : </li>
          <li>Ville : </li>
          <li>Date d'entrée : </li>
          <li>Année : </li>
        </lu>

        {data.map((telephone) => (
          <>
            <lu key={telephone.id} className="list-none">
              <li>{telephone.modele}</li>
              <li>{telephone.marque}</li>
              <li>{telephone.ram_go}</li>
              <li>{telephone.stockage_go}</li>
              <li>{telephone.etat}</li>
              <li>{telephone.aspect}</li>
              <li>{telephone.reseau}</li>
              <li>{telephone.ville}</li>
              <li>{telephone.date_entree}</li>
              <li>{telephone.annee_prod}</li>
            </lu>
            <div className="flex flex-col justify-center items-center">
              <img src={telephone.image} alt={telephone.modele} />
              <h2 className="p-5 border text-center border-quinary shadow-lg rounded">
                Prix conseillé: <br />
                <span className="text-secondary font-blod">
                  {telephone.prix} €
                </span>
              </h2>
              <button
                type="button"
                className="bg-tertiary text-quinary rounded-full w-32 mt-8"
              >
                Valider et enregistrer
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default ResumeTel;
