import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Home, Info, BookOpen, Code2 } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Accueil", icon: <Home className="w-5 h-5" /> },
    { path: "/courses", label: "Cours", icon: <GraduationCap className="w-5 h-5" /> },
    { path: "/blog", label: "Blog", icon: <BookOpen className="w-5 h-5" /> },
    { path: "/assistant", label: "Assistant", icon: <Code2 className="w-5 h-5" /> },
    { path: "/about", label: "À propos", icon: <Info className="w-5 h-5" /> }
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed w-full top-0 z-50 backdrop-blur-lg bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 border-b border-purple-500/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient bg-300% hover:animate-shine">
                CodeMaster
              </span>
            </Link>
          </motion.div>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item.path} 
                  className="relative group"
                >
                  <div className={`
                    flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300
                    hover:bg-white/10 relative overflow-hidden
                  `}>
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
                        ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 font-semibold'
                        : 'text-gray-300 group-hover:text-purple-400'
                      } transition-colors duration-300
                    `}>
                      {item.label}
                    </span>
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                    )}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-red-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;