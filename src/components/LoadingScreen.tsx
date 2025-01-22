import { useEffect, useState } from "react";
import { Star } from "lucide-react";
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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-[#1A1F2C] to-[#2C1A2F] flex flex-col items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Étoiles animées */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Star
            key={i}
            className={`absolute text-yellow-200 animate-pulse`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
              transform: `scale(${Math.random() * 0.5 + 0.5})`,
            }}
          />
        ))}
      </div>

      {/* Logo et titre */}
      <div className="text-center z-10 animate-fade-in">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-8">
          CodeMaster
        </h1>
        
        {/* Blague aléatoire */}
        <p className="text-gray-300 text-lg max-w-md mx-auto mb-12 h-16 transition-all duration-500">
          {currentJoke}
        </p>

        {/* Bouton Démarrer */}
        <Button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onStart, 1000);
          }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
        >
          Démarrer
        </Button>
      </div>
    </div>
  );
};

export default LoadingScreen;