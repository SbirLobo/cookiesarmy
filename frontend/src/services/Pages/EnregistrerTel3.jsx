const EnregistrerTel3 = () => {
  return (
    <div className="border-2 border-quaternary px-3 m-5">
      <div className="flex justify-between items-center">
        <img
          src="../public/assets/favicon/chevron.png"
          alt="précédent"
          className="pt-2"
        />
        <img src="../public/assets/favicon/croix.png" alt="Quitter" />
      </div>

      <h3 className="text-secondary font-bold p-4">3/3</h3>
      <h2 className="font-bold p-3">Elements informatifs:</h2>
      <div className="flex flex-wrap justify-between p-3 lg:px-24">
        <div>
          <label htmlFor="statut">Statut* : </label>
          <br />
          <select name="etat" className="rounded border w-36 sm:w-52  md:w-72">
            <option value=""></option>
            <option value="vendu">Vendu</option>
            <option value="stock">En stock</option>
          </select>
        </div>
        <div>
          <label htmlFor="ville">Ville* : </label>
          <br />
          <input
            type="text"
            name="taille"
            className="rounded border w-36 sm:w-52  md:w-72"
          ></input>
        </div>
      </div>

      <div className="flex flex-wrap justify-between p-3 lg:px-24">
        <div>
          <label htmlFor="dateEntree">Date d'entrée : </label>
          <br />
          <input
            type="text"
            name="dateEntree"
            placeholder="Format JJ/MM/AAAA"
            className="rounded border w-36 sm:w-52  md:w-72"
          ></input>
        </div>
      </div>

      <div className=" p-3 lg:px-24">
        <div>
          <label htmlFor="commentaire">Commentaire : </label>
          <br />
          <textarea
            name="commentaire"
            className="rounded border resize-none w-full"
          ></textarea>
        </div>
      </div>
      <div className="p-3 lg:px-24">
        <div>
          <label htmlFor="photo">Importer une photo : </label>
          <br />
          <div className="border rounded flex-wrap flex flex-col items-center">
            <img
              src="../public/assets/favicon/download.png"
              alt="Ajouter photo"
            />
            <p className="italic text-xs">Glisser l'image pour l'importer</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center m-5">
        <button
          type="button"
          className="bg-tertiary text-quinary rounded-full w-32"
        >
          Suivant
        </button>
      </div>
      <p>* Champs obligatoires</p>
    </div>
  );
};

export default EnregistrerTel3;
