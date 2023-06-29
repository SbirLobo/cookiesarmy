import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InfoUserContext = createContext();

export function InfoUserProvider({ children }) {
  // const API = `${import.meta.env.VITE_BACKEND_URL}/login`;
  const APILOGIN = `http://localhost:5200/login`;
  // const API = `${import.meta.env.VITE_BACKEND_URL}/logout`;
  const APILOGOUT = `http://localhost:5200/logout`;
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState("");
  // const [loggedOutUser, setLoggedOutUser] = useState(null);

  const [user, setUser] = useState({
    firstname: "",
    email: "",
    password: "",
  });

  const handleChangeLogIn = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmitLogIn = (e) => {
    e.preventDefault();
    axios
      .post(APILOGIN, { ...user }, { withCredentials: true })
      .then((res) => {
        console.warn(res.data.message);
        setLoggedInUser(res.data.user.firstname);
        navigate("/home");
      })
      .catch((err) => console.error(err.response.data.message));
  };

  const handleClickLogOut = () => {
    axios
      .get(APILOGOUT, { withCredentials: true })
      .then((res) => {
        console.warn(res.data.message);
        setLoggedInUser("");
        navigate("/");
      })
      .catch((err) => console.error(err.response.data.message));
  };

  return (
    <InfoUserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        loggedInUser,
        handleSubmitLogIn,
        handleChangeLogIn,
        handleClickLogOut,
      }}
    >
      {children}
    </InfoUserContext.Provider>
  );
}

export const useInfoUser = () => useContext(InfoUserContext);
export { InfoUserContext };

InfoUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
