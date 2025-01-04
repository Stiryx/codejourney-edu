import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2C1A2F]">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#9b87f5] to-[#D946EF] text-transparent bg-clip-text">
            Qui sommes-nous ?
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Chez CodeMaster, nous croyons que tout le monde peut apprendre à coder. Notre mission est de rendre l'apprentissage du code accessible, intuitif et motivant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-8 text-center card-hover backdrop-blur-lg bg-white/10 border-[#9b87f5]/20 hover:border-[#9b87f5]/50 transition-all duration-300"
            >
              <div className="h-12 w-12 mx-auto mb-6 bg-gradient-to-br from-[#9b87f5] to-[#D946EF] rounded-xl flex items-center justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="rounded-2xl p-12 backdrop-blur-lg bg-white/5 border border-[#9b87f5]/20 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] text-transparent bg-clip-text">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="p-8 text-center card-hover backdrop-blur-lg bg-white/10 border-[#9b87f5]/20 hover:border-[#9b87f5]/50 transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#D946EF] mx-auto mb-6 p-1">
                  <div className="w-full h-full rounded-full bg-[#1A1F2C] flex items-center justify-center">
                    <span className="text-3xl text-[#9b87f5]">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-gray-300">{member.role}</p>
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
    description: "Des cours gratuits et payants pour tous les niveaux et budgets.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
  },
  {
    title: "Pratique",
    description: "Apprenez en créant des projets réels et concrets.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
  },
  {
    title: "Support",
    description: "Des formateurs et une communauté prêts à vous aider à chaque étape.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
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