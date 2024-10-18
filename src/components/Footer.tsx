import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Neighborhood Nexus</h3>
            <p className="mt-2">Connecting communities, one neighbor at a time.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
              <li><a href="/privacy" className="hover:text-blue-300">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-300">Terms of Service</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-2">Stay Connected</h4>
            <p className="mb-2">Follow us on social media:</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="hover:text-blue-300">Facebook</a>
              <a href="#" className="hover:text-blue-300">Twitter</a>
              <a href="#" className="hover:text-blue-300">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Neighborhood Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;