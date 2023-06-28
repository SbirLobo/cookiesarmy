import React from "react";

function Layout() {
  return (
    <div className="flex flex-row h-screen justify-between items-stretch">
      <div className="w-[25%] flex flex-col justify-between items-center border-r-[2px] border-primary">
        <div className="">
          <img
            src="../src/assets/logo.png"
            alt="logo"
            className="w-[8rem] mt-8"
          />
        </div>
        <div className="mt-[10rem] w-[8rem] text-primary font-semibold">
          <h2 className="mb-[4rem]">Ajouter un smartphone</h2>
          <h2 className="mb-[4rem]">Base de données</h2>
          <h2 className="">FAQ</h2>
        </div>
        <div className="flex w-[8rem] justify-between mt-[3rem] mb-[4rem]">
          <img
            src="../src/assets/Vector.png"
            alt="vector"
            className="w-4 h-4"
          />
          <h2>J.Doe</h2>
          <img src="../src/assets/connection.png" alt="connection" />
        </div>
      </div>
      <footer className="ml-auto mt-auto flex items-center justify-center w-[75%] h-[3rem] bg-primary">
        <p className="text-secondary">
          © Emmaüs Connect avec LaCollecte.tech et Cookiearmy
        </p>
      </footer>
    </div>
  );
}

export default Layout;
