import React from "react";

function Navbar() {
  return (
    <div className="flex h-[100vh] flex-col w-[15rem] justify-between items-center border-r-[2px] border-primary">
      <div className="">
        <img
          src="../src/assets/logo.png"
          alt="logo"
          className="w-[10rem]  mt-8"
        />
      </div>
      <div className="mt-[10rem] text-primary font-semibold">
        <h2 className="mb-[4rem]  p-2">Ajouter un smartphone</h2>
        <h2 className="mb-[4rem]  p-2">Base de données</h2>
        <h2 className="p-2">FAQ</h2>
      </div>
      <div className="flex w-[10rem] justify-between mt-[3rem] mb-[4rem]">
        <img src="../src/assets/Vector.png" alt="vector" className="w-4 h-4" />
        <h2>J.Doe</h2>
        <img src="../src/assets/connection.png" alt="connection" />
      </div>
    </div>
  );
}

export default Navbar;
