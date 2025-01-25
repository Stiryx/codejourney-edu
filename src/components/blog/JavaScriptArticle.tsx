import React from "react";

const JavaScriptArticle = () => {
  const content = (
    <>
      <h3 className="text-xl font-semibold mb-4">Introduction à JavaScript</h3>
      <p className="mb-4">
        JavaScript est un langage de programmation polyvalent qui permet de créer des sites web interactifs et dynamiques.
      </p>

      <h3 className="text-xl font-semibold mb-4">Caractéristiques Principales</h3>
      <div className="mb-4">
        <strong>Points Forts</strong>
        <ul className="list-disc pl-6 mt-2">
          <li>Langage côté client et serveur</li>
          <li>Grande communauté de développeurs</li>
          <li>Nombreuses bibliothèques disponibles</li>
          <li>Facile à apprendre</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mb-4">Applications</h3>
      <div className="mb-4">
        <strong>Domaines d'utilisation</strong>
        <ul className="list-disc pl-6 mt-2">
          <li>Développement web frontend</li>
          <li>Applications Node.js</li>
          <li>Applications mobiles (React Native)</li>
          <li>Jeux vidéo web</li>
        </ul>
      </div>
    </>
  );

  const citations = [
    "https://developer.mozilla.org/fr/docs/Web/JavaScript",
    "https://www.w3schools.com/js/",
    "https://javascript.info/",
  ];

  return { content, citations };
};

export default JavaScriptArticle;