import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Qui sommes-nous ?</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Chez CodeMaster, nous croyons que tout le monde peut apprendre à coder. Notre mission est de rendre l'apprentissage du code accessible, intuitif et motivant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center card-hover">
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center card-hover">
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const values = [
  {
    title: "Accessibilité",
    description: "Des cours gratuits et payants pour tous les niveaux et budgets."
  },
  {
    title: "Pratique",
    description: "Apprenez en créant des projets réels et concrets."
  },
  {
    title: "Support",
    description: "Des formateurs et une communauté prêts à vous aider à chaque étape."
  }
];

const team = [
  {
    name: "Marie Dubois",
    role: "Fondatrice & Développeuse Full-Stack"
  },
  {
    name: "Thomas Martin",
    role: "Expert en Pédagogie Numérique"
  },
  {
    name: "Sophie Bernard",
    role: "Responsable Communauté"
  }
];

export default About;