import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-semibold" : "nav-link";
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">CodeMaster</span>
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