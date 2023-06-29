import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useInfoMobile } from "../contexts/InfoMobileContext";

function EnregistrerTel1() {
  const { mobile, handleChangeMobile } = useInfoMobile();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [invisible, setInvisible] = useState("invisible");
  useEffect(() => {
    if (
      mobile.marque !== "" &&
      mobile.reseau !== "" &&
      mobile.ram_go !== 0 &&
      mobile.stockage_go !== 0 &&
      mobile.etat !== ""
    ) {
      setInvisible("");
    }
  }, [mobile]);
  return (
    <Layout>
      <div className="border-2 rounded-lg border-quaternary px-3 m-5">
        <div className="flex justify-between items-center pt-4">
          <h4 className="text-secondary font-bold p-4">1/3</h4>
          <img src="./src/assets/head.png" alt="head" className="w-20" />
          <Link to="/home">
            <img src="../public/assets/favicon/croix.png" alt="Quitter" />
          </Link>
        </div>
        <h2 className="font-bold">
          Caractéristiques techniques du smartphone:
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap justify-between p-3 lg:px-24">
            <div>
              <label htmlFor="marque">Marque* : </label>
              <br />
              <input
                type="text"
                required
                name="marque"
                id="marque"
                value={mobile.marque}
                onChange={handleChangeMobile}
                className="rounded border w-36 sm:w-52  md:w-72"
              />
            </div>
            <div>
              <label htmlFor="modele">Modèle* : </label>
              <br />
              <input
                type="text"
                name="modele"
                id="modele"
                className="rounded border w-36 sm:w-52  md:w-72"
                value={mobile.modele}
                onChange={handleChangeMobile}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between p-3 lg:px-24">
            <div>
              <label htmlFor="reseau">Réseau* : </label>
              <br />
              <select
                name="reseau"
                id="reseau"
                value={mobile.reseau}
                onChange={handleChangeMobile}
                className="rounded border w-36 sm:w-52  md:w-72"
              >
                <option value="vide">---</option>
                <option value="3G">3G</option>
                <option value="4G">4G</option>
                <option value="5G">5G</option>
              </select>
            </div>
            <div>
              <label htmlFor="stockage">Stockage* : </label>
              <br />
              <select
                name="stockage_go"
                id="stockage_go"
                className="rounded border w-36 sm:w-52  md:w-72"
                value={mobile.stockage_go}
                onChange={handleChangeMobile}
              >
                <option value="vide">---</option>
                <option value="16">16</option>
                <option value="32">32</option>
                <option value="64">64</option>
                <option value="128">128</option>
                <option value="256">256</option>
                <option value="512">512</option>
                <option value="1024">1024</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap justify-between p-3 lg:px-24">
            <div>
              <label htmlFor="ram">RAM* : </label>
              <br />
              <select
                name="ram_go"
                id="ram_go"
                className="rounded border w-36 sm:w-52  md:w-72"
                value={mobile.ram_go}
                onChange={handleChangeMobile}
              >
                <option value="vide">---</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="16">16</option>
              </select>
            </div>
            <div>
              <label htmlFor="etat">Etat* : </label>
              <br />
              <select
                name="etat"
                id="etat"
                className="rounded border w-36 sm:w-52  md:w-72"
                value={mobile.etat}
                onChange={handleChangeMobile}
              >
                <option value="na">---</option>
                <option value="DEE">DEE</option>
                <option value="reparable">Réparable</option>
                <option value="bloque">Bloqué</option>
                <option value="reconditionnable">Reconditionnable</option>
                <option value="reconditionne">Reconditionné</option>
                <option value="neuf">Neuf</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center m-5">
            <Link to="/enregistrer2">
              <button
                type="submit"
                className={`bg-tertiary text-quinary rounded-full w-32 ${invisible}`}
              >
                Suivant
              </button>
            </Link>
          </div>
          <p>* Champs obligatoires</p>
        </form>
      </div>
    </Layout>
  );
}

export default EnregistrerTel1;
