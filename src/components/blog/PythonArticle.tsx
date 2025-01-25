import React from "react";

const PythonArticle = () => {
  const content = (
    <>
      <h3 className="text-xl font-semibold mb-4">Présentation Générale</h3>
      <p className="mb-4">
        <strong>Python</strong> émerge comme le langage de programmation le plus utilisé et polyvalent,
        offrant des capacités exceptionnelles dans plusieurs domaines technologiques.
      </p>

      <h3 className="text-xl font-semibold mb-4">Caractéristiques Principales</h3>
      <div className="mb-4">
        <strong>Points Forts</strong>
        <ul className="list-disc pl-6 mt-2">
          <li>Syntaxe simple et lisible</li>
          <li>Polyvalence exceptionnelle</li>
          <li>Performance dans l'intelligence artificielle</li>
          <li>Communauté de développeurs active</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mb-4">Domaines d'Application</h3>
      <div className="mb-4">
        <strong>Utilisations Principales</strong>
        <ul className="list-disc pl-6 mt-2">
          <li>Intelligence artificielle</li>
          <li>Développement web</li>
          <li>Analyse de données</li>
          <li>Automatisation de tâches</li>
          <li>Création d'algorithmes</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mb-4">Avantages Techniques</h3>
      <div className="mb-4">
        <strong>Bibliothèques Puissantes</strong>
        <ul className="list-disc pl-6 mt-2">
          <li>Facilite le développement rapide</li>
          <li>Support pour Machine Learning</li>
          <li>Intégration avec de nombreuses API</li>
          <li>Web scraping efficace</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mb-4">Contexte Historique</h3>
      <p className="mb-4">
        Lancé en 1991, Python a connu une croissance exponentielle ces dernières années, notamment grâce à ses capacités dans :
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>L'intelligence artificielle</li>
        <li>La science des données</li>
        <li>Le développement logiciel</li>
      </ul>
      <p>
        <strong>Particularité</strong> : Premier dans l'index TIOBE, Python symbolise la modernité et la flexibilité en programmation.
      </p>
    </>
  );

  const citations = [
    "https://fr.pixartprinting.ch/blog/langages-de-programmation/",
    "https://www.qiminfo.ch/developpement-logiciel-langage/",
    "https://blog.hubspot.fr/website/langage-de-programmation",
    "https://www.fed-group.ca/fed-it/conseils/langages-informatiques",
    "https://www.jedha.co/blog/10-principaux-langages-programmation",
    "https://www.codeur.com/blog/top-langages-de-programmation/",
    "https://blog.lesjeudis.com/langage-de-programmation-apprendre",
    "https://www.ib-formation.fr/home/mag/developpement-informatique/langages/levolution-des-langages-de-programmation-populaires",
    "https://www.grandeecolenumerique.fr/actualites/quel-langage-de-programmation-choisir",
    "https://upway.io/blog/les-langages-de-programmation-qui-ont-le-vent-en-poupe/"
  ];

  return { content, citations };
};

export default PythonArticle;