import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path 
      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-semibold" 
      : "text-gray-400 hover:text-gray-200 transition-colors duration-200";
  };

  return (
    <nav className="bg-transparent backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                CodeMaster
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className={isActive("/")}>
              Accueil
            </Link>
            <Link to="/courses" className={isActive("/courses")}>
              Cours
            </Link>
            <Link to="/about" className={isActive("/about")}>
              À propos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;