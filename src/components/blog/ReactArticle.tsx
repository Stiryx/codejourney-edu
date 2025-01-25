import React from "react";

const ReactArticle = () => {
  const content = (
    <>
      <h3 className="text-xl font-semibold mb-4">React : La Bibliothèque Frontend</h3>
      <p className="mb-4">
        React est une bibliothèque JavaScript développée par Facebook pour créer des interfaces utilisateur interactives.
      </p>

      <h3 className="text-xl font-semibold mb-4">Avantages Clés</h3>
      <div className="mb-4">
        <strong>Pourquoi React?</strong>
        <ul className="list-disc pl-6 mt-2">
          <li>DOM virtuel performant</li>
          <li>Composants réutilisables</li>
          <li>Écosystème riche</li>
          <li>Support de la communauté</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mb-4">Fonctionnalités</h3>
      <div className="mb-4">
        <strong>Caractéristiques Principales</strong>
        <ul className="list-disc pl-6 mt-2">
          <li>JSX</li>
          <li>Hooks</li>
          <li>État et props</li>
          <li>Gestion du cycle de vie</li>
        </ul>
      </div>
    </>
  );

  const citations = [
    "https://fr.reactjs.org/",
    "https://beta.reactjs.org/",
    "https://react.dev/",
  ];

  return { content, citations };
};

export default ReactArticle;