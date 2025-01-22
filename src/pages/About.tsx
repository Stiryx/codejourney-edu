import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

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
            Chez CodeMaster, nous sommes une équipe passionnée par l'apprentissage et la transmission du code. Nous croyons que l'éducation doit être libre et accessible à tous. C'est pourquoi notre plateforme est entièrement gratuite : pour que chacun, peu importe ses moyens, puisse découvrir et maîtriser le code.
          </p>
        </div>

        {/* Team Section */}
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
                <Avatar className="w-24 h-24 mx-auto mb-6">
                  <AvatarFallback className="bg-gradient-to-br from-[#9b87f5] to-[#D946EF] text-2xl text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-[#9b87f5] mb-4">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#9b87f5] to-[#D946EF] text-transparent bg-clip-text">
            Témoignages de nos utilisateurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-8 card-hover backdrop-blur-lg bg-white/10 border-[#9b87f5]/20 hover:border-[#9b87f5]/50 transition-all duration-300"
              >
                <Quote className="w-10 h-10 text-[#9b87f5] mb-4" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarFallback className="bg-gradient-to-br from-[#9b87f5] to-[#D946EF] text-white">
                      {testimonial.name.split(' ')[0][0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-[#9b87f5] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const team = [
  {
    name: "Jean Dupont",
    role: "Fondateur & CEO",
    description: "Avec plus de 10 ans d'expérience en développement logiciel et en pédagogie, Jean a fondé CodeMaster avec la vision de rendre l'apprentissage du code accessible à tous. Son objectif est de démocratiser la technologie pour qu'elle devienne un levier d'émancipation pour tous."
  },
  {
    name: "Marie Lemoine",
    role: "Responsable pédagogique",
    description: "Marie est une experte en pédagogie numérique. Elle conçoit les parcours d'apprentissage pour qu'ils soient adaptés à tous les profils d'apprenants. Elle a rencontré un point d'honneur pour rendre chaque leçon interactive et motivante."
  },
  {
    name: "Sophie Martin",
    role: "Lead Développeuse",
    description: "Développeuse passionnée et innovante, Sophie supervise les projets techniques de la plateforme. Elle veille à ce que chaque outil et ressource de CodeMaster soit fonctionnel, performant et à jour avec les dernières technologies."
  },
  {
    name: "David Bertrand",
    role: "Community Manager",
    description: "David est l'âme de notre communauté. Il anime les forums, crée des événements interactifs et assure la communication entre les membres. Il est toujours à l'écoute des retours des utilisateurs et met tout en œuvre pour créer un environnement d'apprentissage convivial."
  },
  {
    name: "Isabelle Lefevre",
    role: "Responsable Support",
    description: "Isabelle veille à ce que chaque question reçoive une réponse rapide et précise. Grâce à son expertise, elle aide nos utilisateurs à surmonter les obstacles techniques et à trouver des solutions à leurs problèmes d'apprentissage."
  }
];

const testimonials = [
  {
    name: "Marc L.",
    role: "Étudiant en informatique",
    content: "CodeMaster a transformé mon expérience d'apprentissage du code. La plateforme est claire, simple à utiliser et surtout gratuite ! J'ai appris à coder en quelques mois et je me sens maintenant prêt à lancer mes propres projets."
  },
  {
    name: "Alice T.",
    role: "Développeuse débutante",
    content: "En tant que débutante, j'avais peur de me lancer dans le monde du développement. Mais CodeMaster a rendu l'apprentissage tellement intuitif. J'ai maintenant une confiance totale en mes capacités à coder et je je suis impatiente de me perfectionner davantage."
  },
  {
    name: "Lucas R.",
    role: "Entrepreneur",
    content: "Je suis entrepreneur et je voulais comprendre les bases du développement pour mieux gérer mes projets techniques. Grâce à CodeMaster, j'ai acquis des compétences précieuses sans avoir à investir une fortune. L'approche gratuite et sans pression est génial."
  },
  {
    name: "Élodie V.",
    role: "Étudiante en reconversion",
    content: "Je me suis lancé dans la reconversion professionnelle vers le développement web, et CodeMaster a été un véritable tremplin. Les ressources pédagogiques sont adaptées à mes besoins, et je n'ai jamais eu l'impression d'être laissée de côté."
  },
  {
    name: "Benjamin S.",
    role: "Freelance",
    content: "CodeMaster m'a permis de passer d'un novice à un développeur freelance. Ce que j'ai particulièrement apprécié, c'est la possibilité de travailler sur des projets réels dès le début. Cela m'a permet de me construire un portefeuille solide."
  }
];

export default About;