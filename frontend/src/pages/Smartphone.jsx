import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Smartphone() {
  return (
    <Layout>
      <div className="border-2 border-secondary m-10">
        <div className="flex justify-between p-2 items-center">
          <h2 className="text-primary font-bold p-3 text-tertiary">
            Résumé du smartphone
          </h2>
          <Link to="/home">
            <img src="../public/assets/favicon/croix.png" alt="Quitter" />
          </Link>
        </div>
        <div className="flex flex-wrap justify-around">
          <ul className="p-10">
            <li>
              Modèle : <span className="font-bold">Value</span>
            </li>
            <li>
              Marque : <span className="font-bold">Value</span>
            </li>
            <li>
              RAM : <span className="font-bold">Value</span>
            </li>
            <li>
              Stockage : <span className="font-bold">Value</span>
            </li>
            <li>
              Etat : <span className="font-bold">Value</span>
            </li>
            <li>
              Aspect : <span className="font-bold">Value</span>
            </li>
            <li>
              Reseau : <span className="font-bold">Value</span>
            </li>
            <li>
              Vendu : <span className="font-bold">Value</span>
            </li>
            <li>
              Ville : <span className="font-bold">Value</span>
            </li>
            <li>
              Date d'entrée : <span className="font-bold">Value</span>
            </li>
            <li>
              Année : <span className="font-bold">Value</span>
            </li>
            <li>
              Ecouteurs : <span className="font-bold">Value</span>
            </li>
            <li>
              Double sim : <span className="font-bold">Value</span>
            </li>
            <li>
              Commentaire : <span className="font-bold">Value</span>
            </li>
          </ul>
          <img
            src="./public/assets/images/Handz - 10 1.png"
            alt="logo"
            className="h-96 hidden lg:block"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Smartphone;
