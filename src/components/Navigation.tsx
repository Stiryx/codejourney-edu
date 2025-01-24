import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Home, Info, BookOpen } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Accueil", icon: <Home className="w-5 h-5" /> },
    { path: "/courses", label: "Cours", icon: <GraduationCap className="w-5 h-5" /> },
    { path: "/blog", label: "Blog", icon: <BookOpen className="w-5 h-5" /> },
    { path: "/about", label: "À propos", icon: <Info className="w-5 h-5" /> }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 glass-effect border-b border-purple-500/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-gradient hover-scale">
                CodeMaster
              </span>
            </Link>
          </motion.div>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300"
                >
                  <span className={`
                    ${isActive(item.path) 
                      ? 'text-purple-400 animate-pulse-glow' 
                      : 'text-gray-300 group-hover:text-purple-400'
                    } transition-colors duration-300
                  `}>
                    {item.icon}
                  </span>
                  <span className={`
                    ${isActive(item.path)
                      ? 'text-gradient font-semibold'
                      : 'text-gray-300 group-hover:text-purple-400'
                    } transition-colors duration-300
                  `}>
                    {item.label}
                  </span>
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600"
                      initial={false}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;