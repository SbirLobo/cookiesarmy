import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
// import { useInfoUser } from "../contexts/InfoUserContext";

function TableauSmartphones() {
  const [smartphones, setSmartphones] = useState([]);
  const [filteredSmartphones, setFilteredSmartphones] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [filter, setFilter] = useState("");
  const [storageFilter, setStorageFilter] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Tri par défaut : ordre croissant

  // const API = `${import.meta.env.VITE_BACKEND_URL}/mobiles`;
  const API = `http://localhost:5200/mobiles`;

  useEffect(() => {
    axios
      .get(API, { withCredentials: true })
      .then((res) => {
        setSmartphones(res.data);
        setFilteredSmartphones(res.data);
        console.warn(res.data.message);
      })
      .catch((err) => console.error(err.response.data.message));
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
        (smartphone) => smartphone.aspect === selectedFilter
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
        (smartphone) => smartphone.stockage_go === parseInt(selectedStorage, 10)
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
        smartphone.modele.toLowerCase().includes(searchQuery.toLowerCase())
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
              <option value="BE">Bon état</option>
              <option value="correct">Correct</option>
              <option value="ME">Mauvais état</option>
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
              <option value="4">4 Go</option>
              <option value="8">8 Go</option>
              <option value="16">16 Go</option>
              <option value="32">32 Go</option>
              <option value="64">64 Go</option>
              <option value="128">128 Go</option>
              <option value="256">256 Go</option>
              <option value="512">512 Go</option>
              <option value="1024">1024 Go</option>
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
            <thead className="text-left">
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
                  <td className="py-1 px-4">
                    <img
                      src={smartphone.image}
                      alt={smartphone.modele}
                      className=""
                    />
                  </td>
                  <td className="py-1 px-4">{smartphone.marque}</td>
                  <td className="py-1 px-4">{smartphone.modele}</td>
                  <td className="py-1 px-4">{smartphone.stockage_go}</td>
                  <td className="py-1 px-4">{smartphone.categorie}</td>
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
