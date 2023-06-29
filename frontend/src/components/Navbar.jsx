import { Link } from "react-router-dom";
import { useInfoUser } from "../contexts/InfoUserContext";

function Navbar() {
  const { loggedInUser, handleClickLogOut } = useInfoUser();

  return (
    <div className="flex w-[25%] flex-row">
      <div className="flex w-full flex-col justify-between items-center border-r-[2px] border-primary">
        <div className="">
          <Link to="/home">
            <img
              src="../src/assets/logo.png"
              alt="logo"
              className="w-[5rem] mt-8"
            />
          </Link>
        </div>
        <div className="mt-[10rem] w-[8rem] text-primary font-semibold">
          <Link to="/enregistrer1">
            <h2 className="mb-[4rem] text-xs">Ajouter un smartphone</h2>
          </Link>
          <h2 className="mb-[4rem] text-xs">Base de données</h2>
          <h2 className="text-xs">FAQ</h2>
        </div>
        <div className="flex w-[8rem] justify-between mt-[3rem] mb-[4rem]">
          <img
            src="../src/assets/Vector.png"
            alt="vector"
            className="w-4 h-4"
          />
          <h2 className="text-xs">
            {loggedInUser !== "" ? loggedInUser : "Déconnecté"}
          </h2>
          <button type="button" onClick={handleClickLogOut}>
            <img src="../src/assets/connection.png" alt="connection" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
