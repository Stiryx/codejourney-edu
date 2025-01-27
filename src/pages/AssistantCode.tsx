import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Code2, Send, Loader2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const MISTRAL_API_KEY = "wf4DMxP78Z5x7g3wu1i3kUJIfMNXIP2p";

const AssistantCode = () => {
  const [code, setCode] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!code.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer du code à analyser",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MISTRAL_API_KEY}`
        },
        body: JSON.stringify({
          model: "mistral-tiny",
          messages: [
            {
              role: "system",
              content: "Tu es un expert en analyse de code et en bonnes pratiques de programmation. Ta mission est d'analyser le code fourni et de proposer des améliorations concrètes et applicables.\n\nPour chaque analyse, structure ta réponse ainsi :\n\n1. **Analyse Globale** (2-3 lignes) : Vue d'ensemble du code et de sa qualité générale.\n\n2. **Points Forts** : Liste des bonnes pratiques déjà présentes.\n\n3. **Améliorations Suggérées** :\n- Performance : Optimisations possibles\n- Lisibilité : Clarté du code\n- Maintenabilité : Structure et organisation\n- Sécurité : Risques potentiels\n\n4. **Exemples de Code** : Montre des extraits de code amélioré pour les suggestions principales.\n\n5. **Ressources** : Si pertinent, suggère des outils ou documentation pour approfondir.\n\nUtilise un ton constructif et pédagogique. Priorise les améliorations ayant le plus d'impact. Reste concis mais précis dans tes explications."
            },
            {
              role: "user",
              content: `Analyse ce code et propose des améliorations :\n\n${code}`
            }
          ],
          temperature: 0.7,
          max_tokens: 1000
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erreur API:', errorData);
        throw new Error(`Erreur API Mistral: ${errorData.message || 'Erreur inconnue'}`);
      }

      const data = await response.json();
      setResponse(data.choices[0].message.content);
      
      toast({
        title: "Succès",
        description: "Analyse terminée !",
      });
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: error instanceof Error ? error.message : "Une erreur est survenue lors de l'analyse du code",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10 animate-pulse-slow" />
      
      <Navigation />
      
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-24 pb-12 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <Code2 className="w-10 h-10 text-purple-400" />
              <Sparkles className="w-4 h-4 text-pink-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient bg-300%">
              Assistant Code
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 bg-black/40 backdrop-blur-xl border-purple-500/20 shadow-xl shadow-purple-500/5">
              <div className="space-y-6">
                <div>
                  <label className="block text-base font-medium text-gray-200 mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    Votre Code
                  </label>
                  <Textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Collez votre code ici pour obtenir de l'aide..."
                    className="min-h-[200px] bg-black/30 border-purple-500/30 text-gray-100 placeholder:text-gray-500 focus:border-purple-500/50 transition-all duration-300"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <motion.div 
                      className="flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                        Analyse en cours...
                      </span>
                    </motion.div>
                  ) : (
                    <motion.div 
                      className="flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                        Analyser le code
                      </span>
                    </motion.div>
                  )}
                </Button>

                {response && (
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
                      Suggestions
                    </h2>
                    <Card className="p-6 bg-black/30 border-purple-500/30 shadow-inner">
                      <pre className="whitespace-pre-wrap text-gray-100 font-mono text-sm">
                        {response}
                      </pre>
                    </Card>
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
};

export default AssistantCode;
