import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {currentYear} Co Pies Może Jeść? Wszystkie prawa zastrzeżone.
          </p>
          <Link 
            to="/polityka-prywatnosci" 
            className="text-sm text-gray-600 hover:text-orange-500"
          >
            Polityka Prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;