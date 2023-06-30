import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex max-md:flex-col max-md:p-8 max-md:justify-start max-md:items-center flex-wrap gap-24 justify-center">
        <div className="w-44 xl:w-60">
          <Link to="/enregistrer1">
            <img
              src="./public/assets/images/home-tel.png"
              alt="ajouter un téléphone"
              className="rounded-t-lg"
            />
            <h2 className="border p-5 text-center border-quinary rounded-b-lg shadow-md hover:shadow-primary">
              Ajouter un <span className="text-secondary">smartphone</span>
            </h2>
          </Link>
        </div>
        <div className="w-44 xl:w-60">
          <Link to="/TableauSmartphones">
            <img
              src="./public/assets/images/home-bdd.png"
              alt="voir les téléphones"
              className="rounded-t-lg "
            />
            <h2 className="border p-5 text-center border-quinary rounded-b-lg shadow-md hover:shadow-secondary">
              <span className="text-quaternary">Gérer</span> les smartphone
            </h2>
          </Link>
        </div>
        <div className="w-44 xl:w-60">
          <Link to="/FAQ">
            <img
              src="./public/assets/images/home-faq.png"
              alt="FAQ"
              className="rounded-t-lg"
            />
            <h2 className="border p-5 text-center border-quinary rounded-b-lg shadow-md hover:shadow-quaternary">
              Foire aux <span className="text-tertiary">questions</span>
            </h2>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
