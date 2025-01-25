import { useEffect, useState } from "react";
import { Star, Sparkles, Zap } from "lucide-react";
import { Button } from "./ui/button";

const jokes = [
  "Pourquoi les développeurs détestent la nature ? Parce qu'elle a trop de bugs !",
  "Comment un développeur ouvre-t-il une porte ? Git pull !",
  "Qu'est-ce qu'un algorithme ? C'est comme une recette de cuisine, mais avec plus de bugs !",
  "Pourquoi les programmeurs préfèrent le noir ? Parce que c'est #000000 !",
  "Comment appelle-t-on un développeur qui ne code pas ? Un manager !",
];

const LoadingScreen = ({ onStart }: { onStart: () => void }) => {
  const [currentJoke, setCurrentJoke] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJoke(jokes[Math.floor(Math.random() * jokes.length)]);
    }, 2000); // Réduit de 3000ms à 2000ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-[#1A1F2C] to-[#2C1A2F] flex flex-col items-center justify-center transition-opacity duration-1000 overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Étoiles filantes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 bg-white/70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              transform: `rotate(${Math.random() * 45}deg)`,
              animation: `shooting-star ${Math.random() * 2 + 1}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing circles avec plus d'intensité */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/30 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[100px] animate-pulse delay-500" />
      </div>

      {/* Logo et titre avec animation améliorée */}
      <div className="text-center z-10 animate-slide-up-fade relative">
        <Sparkles className="absolute -top-12 left-1/2 -translate-x-1/2 text-yellow-200 w-8 h-8 animate-bounce-subtle" />
        
        <h1 className="text-7xl font-bold text-gradient mb-8 animate-gradient hover-scale bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
          CodeMaster
        </h1>
        
        {/* Blague avec effet de verre amélioré */}
        <div className="relative glass-effect rounded-lg p-8 mb-12 backdrop-blur-xl bg-white/10">
          <p className="text-gray-200 text-xl max-w-md mx-auto h-16 transition-all duration-500 font-medium">
            {currentJoke}
          </p>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine rounded-lg" />
        </div>

        {/* Bouton de démarrage amélioré */}
        <Button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onStart, 1000);
          }}
          className="relative gradient-border bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 animate-gradient group overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            Démarrer
            <Zap className="w-5 h-5 animate-bounce-subtle" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
        </Button>
      </div>
    </div>
  );
};

export default LoadingScreen;