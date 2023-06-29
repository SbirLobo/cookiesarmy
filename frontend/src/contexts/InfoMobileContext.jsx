import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InfoMobileContext = createContext();

export function InfoMobileProvider({ children }) {
  // const API = `${import.meta.env.VITE_BACKEND_URL}/mobiles`;
  const API = `http://localhost:5200/mobiles`;
  const navigate = useNavigate();

  const [mobile, setMobile] = useState({
    marque: "",
    modele: "",
    annee_prod: "",
    reseau: "",
    ram_go: "",
    stockage_go: "",
    etat: "",
    aspect: "",
    taille_p: "",
    double_sim: "",
    couleur: "",
    ecouteurs: "",
    vendu: "",
    ville: "",
    date_entree: "",
    commentaire: "",
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
        navigate("/home");
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
