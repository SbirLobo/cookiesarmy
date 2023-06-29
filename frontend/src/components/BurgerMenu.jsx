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
          className="flex flex-col gap-4 absolute top-full right-0"
        >
          <ul>
            <li>
              <Link to="/">
                <span className="text-[0.8rem]">Accueil</span>
              </Link>
            </li>
            <li>
              <Link to="/enregistrer1">
                <span className="text-[0.8rem] text-secondary">
                  Ajouter un smartphone
                </span>
              </Link>
            </li>
            <li className="text-base">
              <Link to="/TableauSmartphones">
                <span className="text-[0.8rem] text-quaternary">
                  Gérer les smartphone
                </span>
              </Link>
            </li>
            <li className="text-base">
              <Link to="/FAQ">
                <span className="text-[0.8rem] text-tertiary">
                  Foire aux questions
                </span>
              </Link>
            </li>
          </ul>
        </menu>
      )}
    </div>
  );
}

export default BurgerMenu;
