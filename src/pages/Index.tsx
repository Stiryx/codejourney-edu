import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Apprenez à coder. Transformez votre avenir.
            </h1>
            <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto">
              Découvrez une nouvelle façon d'apprendre la programmation avec des cours interactifs et un accompagnement personnalisé.
            </p>
            <Button 
              onClick={() => navigate("/courses")}
              size="lg"
              className="mt-8 bg-secondary hover:bg-secondary/90"
            >
              Commencez maintenant
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Pourquoi choisir CodeMaster ?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 card-hover">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Prêt à commencer votre voyage dans le code ?
          </h2>
          <Button 
            onClick={() => navigate("/courses")}
            variant="secondary"
            size="lg"
          >
            Explorer les cours
          </Button>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Cours Interactifs",
    description: "Apprenez en pratiquant avec nos exercices interactifs et nos projets guidés."
  },
  {
    title: "Support Personnalisé",
    description: "Bénéficiez d'un accompagnement de qualité avec nos mentors expérimentés."
  },
  {
    title: "Progression Adaptée",
    description: "Avancez à votre rythme avec un parcours d'apprentissage personnalisé."
  }
];

export default Index;