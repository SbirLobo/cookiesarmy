import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useInfoMobile } from "../contexts/InfoMobileContext";

function EnregistrerTel2() {
  const { handleChangeMobile } = useInfoMobile();

  return (
    <Layout className="border-2 rounded-lg border-quaternary px-3 m-5">
      <div className="flex justify-between items-center">
        <img
          src="../public/assets/favicon/chevron.png"
          alt="précédent"
          className="pt-2"
        />
        <img src="../public/assets/favicon/croix.png" alt="Quitter" />
      </div>

      <h3 className="text-secondary font-bold p-4">2/3</h3>

      <h2 className="font-bold p-4">
        Caractéristiques générales du smartphone:
      </h2>
      <form>
        <div className="flex flex-wrap justify-between p-3 lg:px-24">
          <div>
            <label htmlFor="etat">Etat* : </label>
            <br />
            <select
              name="etat"
              id="etat"
              className="rounded border w-36 sm:w-52  md:w-72"
              onChange={handleChangeMobile}
            >
              <option value="na">---</option>
              <option value="DEE">DEE</option>
              <option value="réparable">Réparable</option>
              <option value="bloqué">Bloqué</option>
              <option value="reconditionable">Reconditionnable</option>
              <option value="reconditionné">Reconditionné</option>
              <option value="neuf">Neuf</option>
            </select>
          </div>
          <div>
            <label htmlFor="aspect">Aspect* : </label>
            <br />
            <select
              name="aspect"
              id="aspect"
              className="rounded border w-36 sm:w-52  md:w-72"
              onChange={handleChangeMobile}
            >
              <option value="na">---</option>
              <option value="mauvais">Mauvais état</option>
              <option value="correct">Correct</option>
              <option value="bon">Bon état</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap justify-between p-3 lg:px-24">
          <div>
            <label htmlFor="taille">Taille d'écran : </label>
            <br />
            <input
              type="text"
              name="taille_p"
              id="taille"
              className="rounded border w-36 sm:w-52  md:w-72"
              placeholder="En pouce"
              onChange={handleChangeMobile}
            />
          </div>
          <div className="gap-5 items-center flex">
            <label htmlFor="sim">Double Sim</label>
            <input
              type="checkbox"
              name="double_sim"
              id="sim"
              onChange={handleChangeMobile}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between p-3 lg:px-24">
          <div>
            <label htmlFor="couleur">Couleur : </label>
            <br />
            <input
              type="text"
              name="couleur"
              id="couleur"
              className="rounded border w-36 sm:w-52  md:w-72"
              onChange={handleChangeMobile}
            />
          </div>
          <div className="gap-5 items-center flex">
            <label htmlFor="ecouteurs">Ecouteurs</label>
            <input
              type="checkbox"
              name="ecouteurs"
              id="ecouteurs"
              onChange={handleChangeMobile}
            />
          </div>
        </div>

        <div className="flex justify-center m-5">
          <Link to="/enregistrer3">
            <button
              type="button"
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

export default EnregistrerTel2;
