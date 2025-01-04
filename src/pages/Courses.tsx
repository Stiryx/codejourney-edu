import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Code, Database, Globe } from "lucide-react";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2C1A2F]">
      <Navigation />

      {/* Header Section */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Nos Cours
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto text-gray-300">
              Découvrez une série de cours conçus pour vous aider à maîtriser les compétences essentielles en programmation.
            </p>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/5 backdrop-blur-lg border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {course.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{course.title}</h3>
              <p className="text-gray-400 mb-4">{course.description}</p>
              <div className="space-y-2">
                <p className="text-gray-300"><strong>Objectif :</strong> {course.objective}</p>
                <p className="text-gray-300"><strong>Contenu :</strong> {course.content}</p>
              </div>
              <Button 
                className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 group"
              >
                Commencer le cours
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Ressources Supplémentaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card 
                key={index}
                className="p-6 bg-white/5 backdrop-blur-lg border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{resource.title}</h3>
                <p className="text-gray-400">{resource.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const courses = [
  {
    title: "Introduction à Python",
    description: "Cours pour débutants",
    objective: "Apprendre la logique de programmation et les bases du langage Python.",
    content: "Variables, conditions, boucles, fonctions, projets de débutant.",
    icon: <Code className="h-6 w-6 text-white" />
  },
  {
    title: "JavaScript pour les Développeurs Web",
    description: "Cours intermédiaires",
    objective: "Apprenez à utiliser JavaScript pour développer des sites web interactifs.",
    content: "Manipulation du DOM, événements, animations, AJAX.",
    icon: <Globe className="h-6 w-6 text-white" />
  },
  {
    title: "Développement Web avec HTML et CSS",
    description: "Cours pour débutants",
    objective: "Créer des sites web modernes en utilisant HTML et CSS.",
    content: "Structure HTML, mises en page CSS, responsive design.",
    icon: <BookOpen className="h-6 w-6 text-white" />
  },
  {
    title: "SQL et Bases de Données",
    description: "Cours pour intermédiaires",
    objective: "Apprenez à travailler avec des bases de données relationnelles.",
    content: "Création de bases de données, requêtes SQL avancées, gestion de données.",
    icon: <Database className="h-6 w-6 text-white" />
  }
];

const resources = [
  {
    title: "Tutoriels Vidéo",
    description: "Accédez à des vidéos explicatives sur divers concepts de programmation."
  },
  {
    title: "Projets Pratiques",
    description: "Travaillez sur des projets concrets pour mettre en pratique vos nouvelles compétences."
  },
  {
    title: "Forum & Support",
    description: "Rejoignez notre communauté de développeurs pour discuter et résoudre vos problèmes."
  }
];

export default Courses;