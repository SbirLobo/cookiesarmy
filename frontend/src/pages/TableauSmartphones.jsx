import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

function TableauSmartphones() {
  const [smartphones, setSmartphones] = useState([]);
  const [filteredSmartphones, setFilteredSmartphones] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filter, setFilter] = useState("");
  const [storageFilter, setStorageFilter] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Tri par défaut : ordre croissant

  useEffect(() => {
    fetch("Repertoire_Smartphones.json")
      .then((response) => response.json())
      .then((data) => {
        setSmartphones(data);
        setFilteredSmartphones(data);
      })
      .catch((error) => console.error(error));
  }, []);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(filteredSmartphones.length / itemsPerPage);

  // Calcul de l'indice du premier et du dernier élément de la page courante
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Extraction des éléments de la page courante
  const currentItems = filteredSmartphones.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Fonction pour changer de page
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Filtrer les smartphones en fonction de la catégorie sélectionnée
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === "Tous") {
      setFilteredSmartphones(smartphones);
    } else {
      const filteredItems = smartphones.filter(
        (smartphone) => smartphone.catégorie === selectedFilter
      );
      setFilteredSmartphones(filteredItems);
    }

    setCurrentPage(1); // Réinitialiser la page courante lors du changement de filtre
  };

  // Filtrer les smartphones en fonction du stockage sélectionné
  const handleStorageFilterChange = (e) => {
    const selectedStorage = e.target.value;
    setStorageFilter(selectedStorage);

    if (selectedStorage === "Tous") {
      setFilteredSmartphones(smartphones);
    } else {
      const filteredItems = smartphones.filter(
        (smartphone) => smartphone.stockage === selectedStorage
      );
      setFilteredSmartphones(filteredItems);
    }

    setCurrentPage(1); // Réinitialiser la page courante lors du changement de filtre
  };

  // Filtrer les smartphones en fonction de la recherche
  const handleSearchChange = (e) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);

    const filteredItems = smartphones.filter(
      (smartphone) =>
        smartphone.marque.toLowerCase().includes(searchQuery.toLowerCase()) ||
        smartphone.ville.toLowerCase().includes(searchQuery.toLowerCase()) ||
        smartphone.modèle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredSmartphones(filteredItems);
    setCurrentPage(1); // Réinitialiser la page courante lors de la recherche
  };

  // Trier les smartphones par prix
  const handleSortByPrice = () => {
    const sortedItems = [...filteredSmartphones];

    if (sortOrder === "asc") {
      sortedItems.sort((a, b) => a.prix - b.prix);
      setSortOrder("desc");
    } else {
      sortedItems.sort((a, b) => b.prix - a.prix);
      setSortOrder("asc");
    }

    setFilteredSmartphones(sortedItems);
  };

  return (
    <Layout>
      <div className="inline-block">
        <h1 className="font-bold text-5xl p-5">Base de données</h1>

        {/* Bouton "Importer un fichier" */}
        <button
          type="button"
          className="bg-secondary text-quinary py-1 px-1 ml-20 mb-4 rounded-md font-raleway font-thin"
        >
          Importer un fichier
        </button>
        <div className="flex justify-center space-x-10 m-2">
          {/* Filtre */}
          <div className="my-2">
            <label htmlFor="filter" className="mr-2">
              Etat :
            </label>
            <select
              id="filter"
              value={filter}
              onChange={handleFilterChange}
              className="border border-gray-300 px-2 py-1 rounded-md"
            >
              <option value="Tous">Tous</option>
              <option value="Bon état">Bon état</option>
              <option value="Très bon état">Correct</option>
              <option value="Mauvais état">Mauvais état</option>
            </select>
          </div>
          <div className="my-2">
            <label htmlFor="storageFilter" className="mr-2">
              Stockage :
            </label>
            <select
              id="storageFilter"
              value={storageFilter}
              onChange={handleStorageFilterChange}
              className="border border-gray-300 px-2 py-1 rounded-md"
            >
              <option value="Tous">Tous</option>
              <option value="64 Go">64 Go</option>
              <option value="128 Go">128 Go</option>
              <option value="256 Go">256 Go</option>
              <option value="512 Go">512 Go</option>
            </select>
          </div>

          {/* Barre de recherche */}
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={handleSearchChange}
            className="border border-gray-300 px-2 py-1 rounded-md"
          />
        </div>
        <div className="flex font-raleway font-thin text-navy">
          {/* Tableau */}
          <table className="border-collapse mr-20 ml-20">
            <thead>
              <tr className="bg-secondary/80 text-primary">
                <th className="py-2 px-4">Image</th>
                <th className="py-2 px-4">Marque</th>
                <th className="py-2 px-4">Modèle</th>
                <th className="py-2 px-4">Stockage</th>
                <th className="py-2 px-4">Etat</th>
                <th className="py-2 px-4">
                  Prix{" "}
                  <button
                    type="button"
                    className="text-sm"
                    onClick={handleSortByPrice}
                  >
                    {sortOrder === "asc" ? "▲" : "▼"}
                  </button>
                </th>
                <th className="py-2 px-4">Ville</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((smartphone, index) => (
                <tr
                  key={smartphone.id}
                  className={index % 2 === 0 ? "bg-grey" : "bg-grey/20"}
                >
                  <td className="py-1 px-4 font-thin">
                    <img
                      src={smartphone.image}
                      alt={smartphone.modèle}
                      className="h-8 w-8"
                    />
                  </td>
                  <td className="py-1 px-4">{smartphone.marque}</td>
                  <td className="py-1 px-4">{smartphone.modèle}</td>
                  <td className="py-1 px-4">{smartphone.stockage}</td>
                  <td className="py-1 px-4">{smartphone.catégorie}</td>
                  <td className="py-1 px-4">{smartphone.prix} €</td>
                  <td className="py-1 px-4">{smartphone.ville}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col items-center font-raleway font-thin">
          {/* Boutons de pagination */}
          <div className="mt-4">
            <button
              type="button"
              className="bg-pink text-secondary py-1 px-2 mr-2"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                type="button"
                key={page}
                className={`bg-pink text-secondary py-1 px-2 mx-1 ${
                  currentPage === page ? "font-normal" : ""
                }`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              className="bg-pink text-secondary py-1 px-2 ml-2"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TableauSmartphones;
