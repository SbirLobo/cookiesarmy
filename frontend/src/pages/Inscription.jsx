import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout";

function Inscription() {
  // const API = `${import.meta.env.VITE_BACKEND_URL}/isncription`;
  const APINSCRIPTION = `http://localhost:5200/inscription`;
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmitConnection = (e) => {
    e.preventDefault();
    axios
      .post(APINSCRIPTION, { ...user }, { withCredentials: true })
      .then((res) => {
        console.warn(res.data.message);
        navigate("/");
      })
      .catch((err) => console.error(err.response.data.message));
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className=" md:w-1/4 p-2 m-5 w-1/2 rounded border shadow-lg border-quinary">
          <h2 className="font-bold">
            Première fois chez
            <span className="text-secondary"> Emmaus Connect</span> ?
          </h2>
          <p>
            Inscris-toi et aide les personnes défavorisées à accéder à un
            smartphone.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-between flex-wrap md:mx-16 lg:mx-32 xl:mx-56">
        <img
          className="hidden md:block"
          src="../public/assets/images/jacqueline.png"
          alt="logo"
        />
        <div className="flex flex-col gap-8 justify-center flex-wrap ">
          <h2 className="text-secondary text-xl">Inscription</h2>
          <form
            className="flex flex-wrap flex-col gap-1 justify-center"
            onSubmit={handleSubmitConnection}
          >
            <label htmlFor="Prenom">Prénom :</label>
            <input
              type="text"
              name="firstname"
              className="rounded md:w-72 w-44 p-1 border"
              onChange={handleChange}
            />
            <label htmlFor="Nom">Nom :</label>
            <input
              type="text"
              name="lastname"
              className="rounded md:w-72 w-44 p-1 border"
              onChange={handleChange}
            />
            <label htmlFor="email">Adresse mail :</label>
            <input
              type="email"
              placeholder="admin@emmaus.fr"
              name="email"
              className="rounded md:w-72 w-44 p-1 border"
              onChange={handleChange}
            />
            <label htmlFor="password">Mot de passe :</label>
            <input
              type="password"
              name="password"
              className="rounded md:w-72 p-1 border w-44"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="bg-tertiary rounded-full text-quinary p-2 m-2"
            >
              Valider
            </button>
            <Link to="/">
              <h2 className="text-center text-quaternary cursor-pointer">
                Se connecter
              </h2>
            </Link>
          </form>
        </div>
      </div>
    </Layout>
  );
}
export default Inscription;
