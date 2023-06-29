import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

function FAQ() {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    fetch("/faq.json")
      .then((response) => response.json())
      .then((data) => setFaqData(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des données FAQ :", error)
      );
  }, []);

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-primary bg-quaternary/30 p-4">
          Questions courantes
        </h1>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={item.id}>
              <button
                type="button"
                className="flex items-center justify-between bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md w-full focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-bold">{item.question}</span>
                <span className="transform transition-transform duration-300 text-quaternary">
                  {activeQuestion === index ? "▲" : "▼"}
                </span>
              </button>
              {activeQuestion === index && (
                <div className="bg-gray-100 p-4 mt-2 rounded-md">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default FAQ;
