import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import axios from "axios";

const InfoMobileContext = createContext();

export function InfoMobileProvider({ children }) {
  // const API = `${import.meta.env.VITE_BACKEND_URL}/mobiles`;
  const API = `http://localhost:5200/mobiles`;
  const current = new Date();
  const date = `${current.getFullYear()}/${
    current.getMonth() + 1
  }/${current.getDate()}`;

  const [mobile, setMobile] = useState({
    marque: "",
    modele: "",
    reseau: "",
    ram_go: 0,
    stockage_go: 0,
    etat: "",
    aspect: "",
    taille_p: "",
    double_sim: false,
    couleur: "",
    ecouteurs: false,
    ville: "",
    date_entree: date,
    commentaire: "",
    prix: "",
    prix: 0,
  });

  const handleChangeMobile = (e) => {
    e.preventDefault();
    setMobile({ ...mobile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(API, { ...mobile }, { withCredentials: true })
      .then((res) => {
        console.warn(res.data.message);
        window.location.href = "/home";
      })
      .catch((err) => console.error(err.response.data.message));
  };

  return (
    <InfoMobileContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ handleChangeMobile, handleSubmit, mobile, setMobile }}
    >
      {children}
    </InfoMobileContext.Provider>
  );
}

export const useInfoMobile = () => useContext(InfoMobileContext);
export { InfoMobileContext };

InfoMobileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
