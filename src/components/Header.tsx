import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingBag, Wrench, Calendar, AlertTriangle, LogIn, UserPlus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <Home className="mr-2" />
            Neighborhood Nexus
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/listings" className="flex items-center"><ShoppingBag className="mr-1" /> Listings</Link></li>
              <li><Link to="/services" className="flex items-center"><Wrench className="mr-1" /> Services</Link></li>
              <li><Link to="/events" className="flex items-center"><Calendar className="mr-1" /> Events</Link></li>
              <li><Link to="/emergency" className="flex items-center"><AlertTriangle className="mr-1" /> Emergency</Link></li>
              <li><Link to="/login" className="flex items-center"><LogIn className="mr-1" /> Login</Link></li>
              <li><Link to="/signup" className="flex items-center"><UserPlus className="mr-1" /> Sign Up</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;