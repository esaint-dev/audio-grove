
import { Music, User, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/lib/auth";

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="glass-nav w-[90%] max-w-2xl rounded-full py-3 px-6 z-50 animate-fadeInNav">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Music className="w-6 h-6" />
          <span className="font-semibold">AudioGrove</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          {isAuthenticated ? (
            <>
              <Link 
                to="/profile" 
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
              <Link 
                to="/favorites" 
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <Heart className="w-5 h-5" />
                <span className="hidden sm:inline">Favorites</span>
              </Link>
            </>
          ) : (
            <Link 
              to="/auth" 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Sign In</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
