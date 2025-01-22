import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ArrowRight, Code2, Users, Zap } from "lucide-react";
import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onStart={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2C1A2F]">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Apprenez à coder. Transformez votre avenir.
            </h1>
            <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto text-gray-300">
              Découvrez une nouvelle façon d'apprendre la programmation avec des cours interactifs et un accompagnement personnalisé.
            </p>
            <Button 
              onClick={() => navigate("/courses")}
              size="lg"
              className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
            >
              Commencez maintenant
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Pourquoi choisir CodeMaster ?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 bg-white/5 backdrop-blur-lg border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Prêt à commencer votre voyage dans le code ?
          </h2>
          <Button 
            onClick={() => navigate("/courses")}
            variant="secondary"
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 group"
          >
            Explorer les cours
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Cours Interactifs",
    description: "Apprenez en pratiquant avec nos exercices interactifs et nos projets guidés.",
    icon: <Code2 className="h-6 w-6 text-white" />
  },
  {
    title: "Support Personnalisé",
    description: "Bénéficiez d'un accompagnement de qualité avec nos mentors expérimentés.",
    icon: <Users className="h-6 w-6 text-white" />
  },
  {
    title: "Progression Adaptée",
    description: "Avancez à votre rythme avec un parcours d'apprentissage personnalisé.",
    icon: <Zap className="h-6 w-6 text-white" />
  }
];

export default Index;