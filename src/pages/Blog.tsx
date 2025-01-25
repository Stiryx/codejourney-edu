import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Brain, Globe, ChartBar, Database, Shield, User, BookOpen, Bot, Network, Code2, Laptop, Library, Terminal, Cpu, GitBranch } from "lucide-react";
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

        {/* Section L'IA et le Développement de Code */}
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
          L'IA et le Développement de Code : Une Révolution Technologique
        </h1>

        <div className="space-y-8 mb-16">
          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Principales Innovations</h2>
              </div>
              <h3 className="text-xl text-white mb-4">Génération Automatique de Code</h3>
              <p className="text-gray-300 mb-4">
                L'IA permet désormais de générer automatiquement du code source en utilisant :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Le machine learning</li>
                <li>Le traitement du langage naturel (TLN)</li>
                <li>Des modèles d'apprentissage avancés comme les Transformers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Fonctionnalités Clés</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Complétion de code automatique</li>
                <li>Suggestions de modifications</li>
                <li>Détection proactive des bugs</li>
                <li>Optimisation des performances</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bot className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Outils Principaux</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>GitHub Copilot</li>
                <li>IBM Watsonx Code Assistant</li>
                <li>GitHub Autopilot</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Bénéfices Concrets</h2>
              </div>
              <h3 className="text-xl text-white mb-4">Pour les Développeurs</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Réduction des tâches répétitives</li>
                <li>Accélération du développement</li>
                <li>Amélioration de la qualité du code</li>
                <li>Détection précoce des vulnérabilités</li>
              </ul>
              <p className="text-gray-300 mt-4">
                L'IA ne remplace pas les développeurs, mais les assiste en transformant leur approche de la programmation.
              </p>
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
              <li><a href="https://about.gitlab.com/fr-fr/topics/devops/ai-code-generation-guide/" className="hover:text-purple-400 transition-colors">[4] GitLab - Guide de la génération de code par l'IA</a></li>
              <li><a href="https://www.ibm.com/fr-fr/think/topics/ai-in-software-development" className="hover:text-purple-400 transition-colors">[5] IBM - L'IA dans le développement logiciel</a></li>
              <li><a href="https://lindo.ai/blog/entn/fr/ai-driven_web_development" className="hover:text-purple-400 transition-colors">[6] Lindo - Développement Web Piloté par l'IA</a></li>
              <li><a href="https://www.eurotechconseil.com/blog/developpement-logiciel-ia/" className="hover:text-purple-400 transition-colors">[7] Eurotech - Développement Logiciel et IA</a></li>
              <li><a href="https://vmsoftwarehouse.fr/l-ia-dans-ianalyse-de-code-advantages-et-defis" className="hover:text-purple-400 transition-colors">[8] VM Software House - L'IA dans l'analyse de code</a></li>
              <li><a href="https://www.cgi.com/france/fr-fr/blog/intelligence-artificielle/intelligence-artificielle-avenir-du-code" className="hover:text-purple-400 transition-colors">[9] CGI - L'IA : Avenir du Code</a></li>
              <li><a href="https://www.alter-solutions.fr/blog/intelligence-artificielle-developpement-logiciel" className="hover:text-purple-400 transition-colors">[10] Alter Solutions - IA et Développement Logiciel</a></li>
              <li><a href="https://www.gisnt.org/read-blog?id=60" className="hover:text-purple-400 transition-colors">[11] GISNT - Blog sur l'IA</a></li>
              <li><a href="https://www.eurotechconseil.com/blog/ia-ml-developpement-logiciel/" className="hover:text-purple-400 transition-colors">[12] Eurotech - IA et ML dans le développement logiciel</a></li>
            </ol>
          </div>
        </section>
      </motion.div>

      {/* Section Python 2025 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
          Python : Le Langage de Programmation Roi en 2025
        </h1>

        <div className="space-y-8">
          {/* Présentation Générale */}
          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20 hover:border-purple-500/40 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Présentation Générale</h2>
              </div>
              <p className="text-gray-300">
                <strong className="text-purple-400">Python</strong> émerge comme le langage de programmation le plus utilisé et polyvalent, 
                offrant des capacités exceptionnelles dans plusieurs domaines technologiques.
              </p>
            </CardContent>
          </Card>

          {/* Caractéristiques Principales */}
          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20 hover:border-purple-500/40 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Caractéristiques Principales</h2>
              </div>
              <h3 className="text-xl text-white mb-4">Points Forts</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Syntaxe simple et lisible</li>
                <li>Polyvalence exceptionnelle</li>
                <li>Performance dans l'intelligence artificielle</li>
                <li>Communauté de développeurs active</li>
              </ul>
            </CardContent>
          </Card>

          {/* Domaines d'Application */}
          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20 hover:border-purple-500/40 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Domaines d'Application</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Intelligence artificielle</li>
                <li>Développement web</li>
                <li>Analyse de données</li>
                <li>Automatisation de tâches</li>
                <li>Création d'algorithmes</li>
              </ul>
            </CardContent>
          </Card>

          {/* Avantages Techniques */}
          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20 hover:border-purple-500/40 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Library className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Avantages Techniques</h2>
              </div>
              <h3 className="text-xl text-white mb-4">Bibliothèques Puissantes</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Facilite le développement rapide</li>
                <li>Support pour Machine Learning</li>
                <li>Intégration avec de nombreuses API</li>
                <li>Web scraping efficace</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contexte Historique */}
          <Card className="bg-white/5 backdrop-blur-lg border-purple-500/20 hover:border-purple-500/40 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-semibold text-white">Contexte Historique</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Lancé en 1991, Python a connu une croissance exponentielle ces dernières années, notamment grâce à ses capacités dans :
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>L'intelligence artificielle</li>
                <li>La science des données</li>
                <li>Le développement logiciel</li>
              </ul>
              <p className="text-gray-300 mt-4">
                <strong className="text-purple-400">Particularité</strong> : Premier dans l'index TIOBE, Python symbolise la modernité et la flexibilité en programmation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Citations */}
        <div className="mt-8 text-sm text-gray-400">
          <h3 className="text-lg font-semibold mb-2">Citations:</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li><a href="https://fr.pixartprinting.ch/blog/langages-de-programmation/" className="hover:text-purple-400 transition-colors">[1] Pixart Printing - Langages de Programmation</a></li>
            <li><a href="https://www.qiminfo.ch/developpement-logiciel-langage/" className="hover:text-purple-400 transition-colors">[2] Qiminfo - Développement Logiciel Langage</a></li>
            <li><a href="https://blog.hubspot.fr/website/langage-de-programmation" className="hover:text-purple-400 transition-colors">[3] HubSpot - Langage de Programmation</a></li>
            <li><a href="https://www.fed-group.ca/fed-it/conseils/langages-informatiques" className="hover:text-purple-400 transition-colors">[4] Fed Group - Langages Informatiques</a></li>
            <li><a href="https://www.jedha.co/blog/10-principaux-langages-programmation" className="hover:text-purple-400 transition-colors">[5] Jedha - 10 Principaux Langages de Programmation</a></li>
            <li><a href="https://www.codeur.com/blog/top-langages-de-programmation/" className="hover:text-purple-400 transition-colors">[6] Codeur - Top Langages de Programmation</a></li>
            <li><a href="https://blog.lesjeudis.com/langage-de-programmation-apprendre" className="hover:text-purple-400 transition-colors">[7] Les Jeudis - Langage de Programmation à Apprendre</a></li>
            <li><a href="https://www.ib-formation.fr/home/mag/developpement-informatique/langages/levolution-des-langages-de-programmation-populaires" className="hover:text-purple-400 transition-colors">[8] IB Formation - Évolution des Langages de Programmation</a></li>
            <li><a href="https://www.grandeecolenumerique.fr/actualites/quel-langage-de-programmation-choisir" className="hover:text-purple-400 transition-colors">[9] Grande École Numérique - Quel Langage de Programmation Choisir</a></li>
            <li><a href="https://upway.io/blog/les-langages-de-programmation-qui-ont-le-vent-en-poupe/" className="hover:text-purple-400 transition-colors">[10] Upway - Langages de Programmation en Vogue</a></li>
          </ol>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
