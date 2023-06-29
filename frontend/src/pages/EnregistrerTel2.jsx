import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CurrentFormContext from "../components/CurrentFormContext";
import Layout from "../components/Layout";

function EnregistrerTel2() {
  const { form, handleChange } = useContext(CurrentFormContext);
  const [invisible, setInvisible] = useState("invisible");
  useEffect(() => {
    if (form.aspect !== "") {
      setInvisible("");
    }
  }, [form]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="border-2 rounded-lg border-quaternary px-3 m-5">
        <div className="flex justify-between items-center">
          <Link to="/enregistrer1">
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

        <h3 className="text-secondary font-bold p-4">2/3</h3>
        <div className="flex flex-row justify-between">
          <h2 className="font-bold p-4">
            Caractéristiques générales du smartphone:
          </h2>
          <img src="./src/assets/head.png" alt="head" className="w-20" />
        </div>
        <form onChange={handleSubmit}>
          <div className="flex flex-wrap justify-between p-3 lg:px-24">
            <div>
              <label htmlFor="ville">Ville : </label>
              <br />
              <input
                type="text"
                name="ville"
                id="ville"
                value={form.ville}
                onChange={handleChange}
                className="rounded border w-36 sm:w-52  md:w-72"
              />
            </div>
            <div>
              <label htmlFor="aspect">Aspect* : </label>
              <br />
              <select
                name="aspect"
                id="aspect"
                className="rounded border w-36 sm:w-52  md:w-72"
                value={form.aspect}
                onChange={handleChange}
              >
                <option value="na">---</option>
                <option value="ME">Mauvais état</option>
                <option value="correct">Correct</option>
                <option value="BE">Bon état</option>
              </select>
            </div>
          </div>
        </form>

        <div className="flex flex-wrap justify-between p-3 lg:px-24">
          <div>
            <label htmlFor="taille">Taille d'écran : </label>
            <br />
            <input
              type="text"
              name="taille_p"
              id="taille_p"
              className="rounded border w-36 sm:w-52  md:w-72"
              placeholder="En pouce"
              value={form.taille_p}
              onChange={handleChange}
            />
          </div>
          <div className="gap-5 items-center flex">
            <label htmlFor="sim">Double Sim</label>
            <select
              type="checkbox"
              name="double_sim"
              id="double_sim"
              value={form.double_sim}
              onChange={handleChange}
              className="rounded border"
            >
              <option value="false">Non</option>
              <option value="true">Oui</option>
            </select>
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
              value={form.couleur}
              onChange={handleChange}
            />
          </div>
          <div className="gap-5 items-center flex">
            <label htmlFor="ecouteurs">Ecouteurs</label>
            <select
              name="ecouteurs"
              id="ecouteurs"
              value={form.ecouteurs}
              onChange={handleChange}
              className="rounded border"
            >
              <option value="false">Non</option>
              <option value="true">Oui</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center m-5">
          <Link to="/enregistrer3">
            <button
              type="submit"
              className={`bg-tertiary text-quinary rounded-full w-32 ${invisible}`}
            >
              Suivant
            </button>
          </Link>
        </div>
        <p>* Champs obligatoires</p>
      </div>
    </Layout>
  );
}

export default EnregistrerTel2;
