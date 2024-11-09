import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dog, BookOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Dog className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">Czy Pies Może Zjeść?</span>
          </Link>
          
          <div className="flex items-center">
            <Link
              to="/journal"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/journal'
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              <BookOpen className="w-5 h-5 mr-1" />
              Dziennik
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;