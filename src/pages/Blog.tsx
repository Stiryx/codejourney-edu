import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Brain, Globe, ChartBar, Database, Shield, User, BookOpen, Bot, Network, Code2, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2C1A2F]">
      <Navigation />
      
      {/* Section Blogs Tech */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
          Blogs Tech Francophones Incontournables
        </h1>

        <div className="space-y-8 mb-16">
          {/* Eleven Labs */}
          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Eleven Labs</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Un blog tech français de référence lancé en octobre 2011 par une société spécialisée dans les projets web agiles.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Articles sur l'actualité informatique</li>
                <li>Solutions concrètes aux problèmes de programmation</li>
                <li>Couverture de sujets variés comme le développement web, le DevOps et le cloud</li>
              </ul>
            </CardContent>
          </Card>

          {/* Jesuisundev */}
          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Laptop className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Jesuisundev</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Créé et animé par un développeur backend, ce blog est une ressource précieuse pour la communauté dev.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Conseils pour la formation en développement web</li>
                <li>Articles techniques sur les nouvelles technologies</li>
                <li>Contenus sur les frameworks</li>
                <li>Partage de l'expérience quotidienne d'un développeur</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Section IA 2025 */}
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
          L'IA en 2025 : Une Révolution Technologique Multidimensionnelle
        </h1>

        <section className="space-y-8">
          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Défis et Perspectives Émergents</h2>
              </div>
              <div className="prose prose-invert">
                <p className="text-gray-300">
                  L'année 2025 pourrait marquer un tournant critique pour l'IA, avec un potentiel 
                  <strong className="text-purple-400"> déficit de données fiables</strong>. 
                  Les estimations montrent que la croissance des bases de données pour l'entraînement 
                  de l'IA atteint 100% par an, alors que le contenu utilisable sur Internet ne 
                  progresse que de 10%.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <ChartBar className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Expansion Économique et Technologique</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl text-white">Projection de Marché</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Marché de l'IA générative estimé à <strong className="text-purple-400">1300 milliards de dollars d'ici 2032</strong></li>
                  <li><strong className="text-purple-400">80%</strong> des entreprises utiliseront des modèles d'IA générative d'ici 2026</li>
                  <li><strong className="text-purple-400">8,4 milliards</strong> d'assistants vocaux dans le monde</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Transformations Sectorielles</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-white flex items-center gap-2">
                    <Database className="w-5 h-5 text-purple-400" />
                    SEO et Recherche
                  </h3>
                  <ul className="list-disc list-inside mt-2 space-y-2 text-gray-300">
                    <li>Budgets SEO tripleront d'ici fin 2025</li>
                    <li>Émergence du Generative Engine Optimization (GEO)</li>
                    <li>Près de 65% des recherches sans clic aux États-Unis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    Éducation
                  </h3>
                  <ul className="list-disc list-inside mt-2 space-y-2 text-gray-300">
                    <li>Plus de 2/3 des élèves du secondaire utilisent des outils d'IA générative</li>
                    <li>Seulement 10% des écoles encadrent officiellement l'utilisation de l'IA</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl text-white flex items-center gap-2">
                    <Bot className="w-5 h-5 text-purple-400" />
                    Recherche Scientifique
                  </h3>
                  <ul className="list-disc list-inside mt-2 space-y-2 text-gray-300">
                    <li>Percée dans la <strong className="text-purple-400">compréhension des communications animales</strong></li>
                    <li>Utilisation d'algorithmes pour décoder les langages animaux</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Défis Éthiques et Réglementaires</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Transparence des systèmes d'IA</li>
                <li>Régulation éthique</li>
                <li>Impact environnemental</li>
                <li>Préservation de l'autonomie humaine</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Perspective Prospective</h2>
              </div>
              <p className="text-gray-300">
                L'IA en 2025 ne sera plus simplement un outil technologique, mais 
                <strong className="text-purple-400"> une composante intégrante de notre écosystème social et professionnel</strong>. 
                Son développement exigera un équilibre subtil entre innovation technologique et 
                responsabilité humaine.
              </p>
            </CardContent>
          </Card>

          {/* Citations */}
          <div className="mt-8 text-sm text-gray-400">
            <h3 className="text-lg font-semibold mb-2">Citations:</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li><a href="https://www.free-work.com/fr/tech-it/blog/tags/code" className="hover:text-purple-400 transition-colors">[1] Free Work - Blogs Tech</a></li>
              <li><a href="https://talks.freelancerepublik.com/top-10-blogs-techniques-francais-developpeurs/" className="hover:text-purple-400 transition-colors">[2] Freelance Republik - Top 10 Blogs Techniques Français</a></li>
              <li><a href="https://blog.hubspot.fr/website/top-blogs-podcast-developpement-web" className="hover:text-purple-400 transition-colors">[3] HubSpot - Top Blogs et Podcasts Développement Web</a></li>
              <li><a href="https://www.sciencepresse.qc.ca/actualite/2025/01/06/surveiller-2025-deficit-donnees-pour-ia" className="hover:text-purple-400 transition-colors">[1] Science Presse - Déficit de données pour l'IA</a></li>
              <li><a href="https://www.grenier.qc.ca/actualites/46523/tendances-de-lia-en-2025-plus-performante-plus-complexe-plus-repandue" className="hover:text-purple-400 transition-colors">[2] Grenier - Tendances de l'IA en 2025</a></li>
              <li><a href="https://www.innovant.fr/2025/01/18/comprendre-enfin-les-animaux-cette-avancee-en-ia-pourrait-decoder-leurs-conversations/" className="hover:text-purple-400 transition-colors">[3] Innovant - Comprendre les animaux grâce à l'IA</a></li>
              <li><a href="https://www.unesco.org/fr/articles/lunesco-dedie-la-journee-internationale-de-leducation-2025-lintelligence-artificielle" className="hover:text-purple-400 transition-colors">[4] UNESCO - Journée internationale de l'éducation 2025</a></li>
            </ol>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Blog;
