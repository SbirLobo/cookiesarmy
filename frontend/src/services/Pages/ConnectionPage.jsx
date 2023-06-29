function ConnectionPage() {
  return (
    <div>
      <div className="flex justify-center">
        <div className=" md:w-1/4 md:p-2 m-5 w-1/2 rounded border shadow-lg border-quinary">
          <h2 className="font-bold">
            Bienvenu sur <span className="text-secondary">Emmaus Connect</span>{" "}
            !
          </h2>
          <p>
            Ici, nous essayons d'aider les personnes défavorisées à accéder à un
            smartphone.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-between flex-wrap md:mx-16 lg:mx-32 xl:mx-56">
        <img
          className="hidden md:block"
          src="../public/assets/images/jacqueline.png"
          alt="logo"
        />
        <div className="flex flex-col gap-8 justify-center flex-wrap ">
          <h2 className="text-secondary text-xl">Se connecter</h2>
          <form className="flex flex-wrap flex-col gap-3 justify-center">
            <label htmlFor="email">Identifiant</label>
            <input
              type="email"
              placeholder="admin@emmaus.fr"
              name="email"
              className="rounded md:w-72 w-44 p-1 border"
            />
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              className="rounded md:w-72 p-1 border w-44"
            />

            <button
              type="submit"
              className="bg-tertiary rounded-full text-quinary p-2 m-2"
            >
              Valider
            </button>

            <h2 className="text-center text-quaternary cursor-pointer">
              S'inscrire
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConnectionPage;
