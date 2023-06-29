import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CurrentFormContext = createContext();

export default CurrentFormContext;

export function CurrentFormProvider({ children }) {
  const [form, setForm] = useState({
    modele: "",
    marque: "",
    ram_go: "",
    stockage_go: "",
    etat: "",
    aspect: "",
    couleur: "",
    taille_p: "",
    reseau: "",
    vendu: "",
    ville: "",
    date_entree: "",
    annee_prod: "",
    image: "",
    ecouteurs: "",
    double_sim: "",
    commentaire: "",
    prix: 0,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <CurrentFormContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ form, handleChange }}
    >
      {children}
    </CurrentFormContext.Provider>
  );
}

CurrentFormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
