function Navbar() {
  return (
    <div className="flex w-[25%] flex-row">
      <div className="flex w-full flex-col justify-between items-center border-r-[2px] border-primary">
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
    </div>
  );
}

export default Navbar;
