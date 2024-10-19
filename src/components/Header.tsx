import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn, UserPlus, LogOut } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean; // Prop to check if the user is logged in
  onLogout: () => void; // Function to handle logout
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="bg-transparent text-[#190019]">
      <div className="container mx-auto px-4 py-4 flex justify-end">
        {/* Conditional rendering based on login status */}
        {!isLoggedIn ? (
          <div className="flex space-x-4">
            <Link to="/login" className="bg-[#DFB6B2] py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 flex items-center">
              <LogIn className="mr-1" /> Log In
            </Link>
            <Link to="/signup" className="bg-[#DFB6B2] py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 flex items-center">
              <UserPlus className="mr-1" /> Sign Up
            </Link>
          </div>
        ) : (
          <button
            onClick={onLogout}
            className="bg-[#DFB6B2] py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 flex items-center"
          >
            <LogOut className="mr-1" /> Log Out
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
