import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Nos Cours</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez une série de cours conçus pour vous aider à maîtriser les compétences essentielles en programmation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden card-hover">
              <div className="aspect-video bg-gray-100" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{course.level}</Badge>
                  <Badge variant="outline">{course.duration}</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Button className="w-full">Commencer le cours</Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            Ressources Supplémentaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="p-6 text-center card-hover">
                <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Button variant="outline">En savoir plus</Button>
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
    description: "Apprenez la logique de programmation et les bases du langage Python.",
    level: "Débutant",
    duration: "20 heures"
  },
  {
    title: "JavaScript pour le Web",
    description: "Maîtrisez JavaScript pour créer des sites web interactifs.",
    level: "Intermédiaire",
    duration: "25 heures"
  },
  {
    title: "HTML & CSS Modernes",
    description: "Créez des sites web responsive avec les dernières technologies.",
    level: "Débutant",
    duration: "15 heures"
  },
  {
    title: "SQL et Bases de Données",
    description: "Apprenez à gérer et manipuler des bases de données.",
    level: "Intermédiaire",
    duration: "18 heures"
  }
];

const resources = [
  {
    title: "Tutoriels Vidéo",
    description: "Accédez à notre bibliothèque de tutoriels vidéo explicatifs."
  },
  {
    title: "Projets Pratiques",
    description: "Mettez en pratique vos compétences sur des projets réels."
  },
  {
    title: "Forum & Support",
    description: "Rejoignez notre communauté de développeurs pour échanger."
  }
];

export default Courses;