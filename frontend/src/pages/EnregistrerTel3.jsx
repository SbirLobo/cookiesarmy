import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useInfoMobile } from "../contexts/InfoMobileContext";

function EnregistrerTel3() {
  const { mobile, handleChangeMobile } = useInfoMobile();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Layout className="border-2 rounded-lg border-quaternary px-3 m-5">
      <div className="flex justify-between items-center">
        <Link to="/enregistrer2">
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

      <h3 className="text-secondary font-bold p-4">3/3</h3>
      <h2 className="font-bold p-3">Elements informatifs:</h2>
      <form onChange={handleSubmit}>
        <div className="flex flex-wrap justify-between p-3 lg:px-24">
          <div>
            <label htmlFor="vendu">Vendu* : </label>
            <br />
            <select
              name="vendu"
              className="rounded border w-36 sm:w-52  md:w-72"
              id="etat"
              value={mobile.vendu}
              onChange={handleChangeMobile}
            >
              <option value="vide">---</option>
              <option value="Oui">Vendu</option>
              <option value="Non">En stock</option>
            </select>
          </div>
          <div>
            <label htmlFor="ville">Ville* : </label>
            <br />
            <input
              type="text"
              name="ville"
              id="ville"
              className="rounded border w-36 sm:w-52  md:w-72"
              value={mobile.ville}
              onChange={handleChangeMobile}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between p-3 lg:px-24">
          <div>
            <label htmlFor="date_entree">Date d'entrée : </label>
            <br />
            <input
              type="text"
              name="date_entree"
              placeholder="Format JJ/MM/AAAA"
              className="rounded border w-36 sm:w-52  md:w-72"
              id="dateEntree"
              value={mobile.date_entree}
              onChange={handleChangeMobile}
            />
          </div>
        </div>

        <div className=" p-3 lg:px-24">
          <div>
            <label htmlFor="commentaire">Commentaire : </label>
            <br />
            <textarea
              name="commentaire"
              className="rounded border resize-none w-full"
              id="commentaire"
              value={mobile.commentaire}
              onChange={handleChangeMobile}
            />
          </div>
        </div>
        <div className="p-3 lg:px-24">
          <div>
            <label htmlFor="photo">Importer une photo : </label>
            <br />
            <div className="border rounded flex-wrap flex flex-col items-center">
              <img src="../public/assets/favicon/download.png" alt="Ajouter" />
              <p className="italic text-xs">Glisser l'image pour l'importer</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center m-5">
          <Link to="/resume">
            <button
              type="submit"
              className="bg-tertiary text-quinary rounded-full w-32"
            >
              Suivant
            </button>
          </Link>
        </div>
        <p>* Champs obligatoires</p>
      </form>
    </Layout>
  );
}

export default EnregistrerTel3;
