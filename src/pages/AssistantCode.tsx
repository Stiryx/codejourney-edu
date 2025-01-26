import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Code2, Send, Loader2 } from "lucide-react";

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
    // L'intégration de l'API Mistral sera ajoutée ici une fois que vous aurez fourni la clé API
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2C1A2F]">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Assistant Code
            </h1>
          </div>

          <Card className="p-6 bg-white/5 backdrop-blur-lg border-purple-500/20">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Votre Code
                </label>
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Collez votre code ici pour obtenir de l'aide..."
                  className="min-h-[200px] bg-black/20 border-purple-500/30 text-gray-100"
                />
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyse en cours...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Analyser le code
                  </>
                )}
              </Button>

              {response && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-gray-200 mb-3">
                    Suggestions
                  </h2>
                  <Card className="p-4 bg-black/20 border-purple-500/30">
                    <pre className="whitespace-pre-wrap text-gray-100">
                      {response}
                    </pre>
                  </Card>
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AssistantCode;