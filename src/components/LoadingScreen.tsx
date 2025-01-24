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
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-[#1A1F2C] to-[#2C1A2F] flex flex-col items-center justify-center transition-opacity duration-1000 overflow-hidden ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-pulse-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-yellow-200 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
              transform: `scale(${Math.random() * 0.5 + 0.5}) rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Glowing circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-blue-500/20 rounded-full blur-[80px] animate-pulse delay-500" />
      </div>

      {/* Logo and title */}
      <div className="text-center z-10 animate-slide-up-fade relative">
        <Sparkles className="absolute -top-12 left-1/2 -translate-x-1/2 text-yellow-200 w-8 h-8 animate-bounce-subtle" />
        
        <h1 className="text-6xl font-bold text-gradient mb-8 animate-gradient hover-scale">
          CodeMaster
        </h1>
        
        {/* Random joke */}
        <div className="relative glass-effect rounded-lg p-6 mb-12">
          <p className="text-gray-300 text-lg max-w-md mx-auto h-16 transition-all duration-500">
            {currentJoke}
          </p>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shine rounded-lg" />
        </div>

        {/* Start button */}
        <Button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onStart, 1000);
          }}
          className="relative gradient-border bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 animate-gradient group overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Démarrer
            <Zap className="w-4 h-4 animate-bounce-subtle" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine" />
        </Button>
      </div>
    </div>
  );
};

export default LoadingScreen;