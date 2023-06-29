import React, { useState, useEffect } from 'react';

const TableauSmartphones = () => {
  const [smartphones, setSmartphones] = useState([]);
  const [filteredSmartphones, setFilteredSmartphones] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('Repertoire_Smartphones.json')
      .then(response => response.json())
      .then(data => {
        setSmartphones(data);
        setFilteredSmartphones(data);
      })
      .catch(error => console.error(error));
  }, []);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(filteredSmartphones.length / itemsPerPage);

  // Calcul de l'indice du premier et du dernier élément de la page courante
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Extraction des éléments de la page courante
  const currentItems = filteredSmartphones.slice(indexOfFirstItem, indexOfLastItem);

  // Fonction pour changer de page
  const goToPage = page => {
    setCurrentPage(page);
  };

  // Filtrer les smartphones en fonction de la catégorie sélectionnée
  const handleFilterChange = e => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === 'Tous') {
      setFilteredSmartphones(smartphones);
    } else {
      const filteredItems = smartphones.filter(smartphone => smartphone.catégorie === selectedFilter);
      setFilteredSmartphones(filteredItems);
    }

    setCurrentPage(1); // Réinitialiser la page courante lors du changement de filtre
  };

  // Filtrer les smartphones en fonction de la recherche
  const handleSearchChange = e => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);

    const filteredItems = smartphones.filter(
      smartphone =>
        smartphone.marque.toLowerCase().includes(searchQuery.toLowerCase()) ||
        smartphone.modèle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredSmartphones(filteredItems);
    setCurrentPage(1); // Réinitialiser la page courante lors de la recherche
  };

  return (
    <div>
      <h1 className="font-bold text-5xl p-10">Base de données</h1>
<div>
  <div className="flex place-content-around font-raleway font-thin justify-items-center">

      {/* Filtre */}
      <div className="my-2 ">
        <label htmlFor="filter" className="mr-2">
          Filtre :
        </label>
        <select
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          className="border border-gray-300 px-2 py-1 rounded-md"
        >
          <option value="Tous">Tous</option>
          <option value="Bon état">Bon état</option>
          <option value="Très bon état">Très bon état</option>
          <option value="Mauvais état">Mauvais état</option>
        </select>
      </div>
<div className="items-align">
    {/* Bouton "Importer un fichier" */}
    <button className="bg-blue text-secondary py-1 px-2 mr-2 rounded-md">
      Importer un fichier
    </button>
      {/* Barre de recherche */}
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={handleSearchChange}
          className="border border-gray-300 px-2 py-1 rounded-md"
        />
        </div>
        </div>
      </div>
<div className="flex items-center font-raleway font-thin text-navy">
      {/* Tableau */}
      <table className="border-collapse w-full mr-20 ml-20">
        <thead>
          <tr className="bg-pink/90 text-navy">
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Marque</th>
            <th className="py-2 px-4">Modèle</th>
            <th className="py-2 px-4">Catégorie</th>
            <th className="py-2 px-4">Date d'ajout</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((smartphone, index) => (
            <tr key={smartphone.id} className={index % 2 === 0 ? 'bg-grey' : 'bg-grey/20'} >
              
              <td className="py-1 px-4 font-thin" >
                <img src={smartphone.image} alt={smartphone.modèle} className="h-8 w-8" />
              </td>
              <td className="py-1 px-4">{smartphone.marque}</td>
              <td className="py-1 px-4">{smartphone.modèle}</td>
              <td className="py-1 px-4">{smartphone.catégorie}</td>
              <td className="py-1 px-4">{smartphone.date_ajout}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="flex flex-col items-center font-raleway font-thin">

      {/* Boutons de pagination */}
      <div className="mt-4">
        <button
          className="bg-pink text-secondary py-1 px-2 mr-2"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            className={`bg-pink text-secondary py-1 px-2 mx-1 ${
              currentPage === page ? "font-normal" : ''
            }`}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="bg-pink text-secondary py-1 px-2 ml-2"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>
    </div>
    </div>
  );
};

export default TableauSmartphones;
