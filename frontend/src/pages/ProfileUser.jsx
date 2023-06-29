import React, { useState } from "react";
import Layout from "../components/Layout";

function UserProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    status: "",
    role: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <div className="container mx-auto py-8 text-primary">
        <h1 className="flex justify-center text-3xl font-bold mb-4 bg-tertiary/20">
          Profil utilisateur
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2 font-bold">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-2 font-bold">
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-bold">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block mb-2 font-bold">
              Statut
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-tertiary"
              required
            >
              <option value="">Sélectionnez le statut</option>
              <option value="salarié">Salarié</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block mb-2 font-bold">
              Rôle
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-secondary text-quinary py-2 px-4 rounded-md hover:bg-secondary/50"
            >
              Valider
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default UserProfile;
