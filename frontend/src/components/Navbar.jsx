import { Link } from "react-router-dom";
import { useInfoUser } from "../contexts/InfoUserContext";

function Navbar() {
  const { loggedInUser, handleClickLogOut } = useInfoUser();

  return (
    <div className="flex w-[25%] flex-row max-lg:hidden">
      <div className="flex w-full flex-col justify-between items-center border-r-[2px] border-primary">
        <div className="">
          <Link to="/home">
            <img
              src="../src/assets/logo.png"
              alt="logo"
              className="mt-8 w-40"
            />
          </Link>
        </div>
        <div className="w-[8rem] text-primary h-1/3 flex flex-col items-center justify-around gap-4 font-semibold">
          <Link to="/enregistrer1" className="w-full text-center">
            <h2 className="text-xs p-1 my-4 hover:text-quinary hover:bg-secondary hover:rounded-full">
              Ajout mobile
            </h2>
          </Link>
          <Link
            to="/TableauSmartphones"
            type="button"
            className="w-full text-center"
          >
            <h2 className="text-xs p-1 my-4 hover:text-quinary hover:bg-tertiary hover:rounded-full">
              Base de données
            </h2>
          </Link>
          <Link to="/FAQ" className="w-full text-center">
            <h2 className="text-xs p-1 my-4 hover:text-quinary hover:bg-quaternary hover:rounded-full">
              FAQ
            </h2>
          </Link>
        </div>
        <div className="flex w-[8rem] justify-between items-center mb-[4rem]">
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
