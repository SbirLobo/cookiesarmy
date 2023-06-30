import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function BurgerMenu() {
  const [active, setActive] = useState(false);
  const [clicksOutside, setClicksOutside] = useState(0);
  const menuRef = useRef(null);

  const handleClick = () => {
    setActive(!active);
    setClicksOutside(0);
  };

  const handleDocumentClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setClicksOutside((prevClicksOutside) => prevClicksOutside + 1);
    }
  };

  useEffect(() => {
    if (clicksOutside === 2) {
      setActive(false);
      setClicksOutside(0);
    }
  }, [clicksOutside]);

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="flex flex-col burger-container ml-auto relative">
      <button
        className="burger ml-10 opacity-[50%]"
        type="button"
        onClick={handleClick}
      >
        <span className="burgerline">{}</span>
        <span className="burgerline">{}</span>
        <span className="burgerline">{}</span>
      </button>
      {active && (
        <menu
          ref={menuRef}
          className="bg-[white] font-bold w-[200px] border-primary border-l-2 border-y-2 p-4 flex flex-col rounded-l-md absolute top-full right-0"
        >
          <img src="./src/assets/head.png" alt="head" className="w-14" />
          <ul>
            <li className="text-base py-8">
              <Link to="/">
                <span className="text-[0.8rem] text-primary">Accueil</span>
              </Link>
            </li>
            <li className="text-base py-8">
              <Link to="/enregistrer1">
                <span className="text-[0.8rem] text-secondary">
                  Ajouter mobile
                </span>
              </Link>
            </li>
            <li className="text-base py-8">
              <Link to="/TableauSmartphones">
                <span className="text-[0.8rem] text-quaternary">
                  Base de données
                </span>
              </Link>
            </li>
            <li className="text-base py-8">
              <Link to="/FAQ">
                <span className="text-[0.8rem] text-tertiary">FAQ</span>
              </Link>
            </li>
          </ul>
        </menu>
      )}
    </div>
  );
}

export default BurgerMenu;
