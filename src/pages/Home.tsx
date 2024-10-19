import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center bg-transparent min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#190019] font-inter">
        Welcome to Neighbourhood Nexus
      </h1>
      {/* Make the image 15% bigger */}
      <img src="src/components/commscrisis.jpeg" alt="Neighborhood" className="mt-6 w-[57.5%] h-auto rounded-lg shadow-md" />
      <p className="text-xl mb-4 text-[#522858] font-inter">
        Empowering Communities, One Connection at a Time.
      </p>
      <p className="text-lg mb-8 text-[#522858] font-inter">
        The link between you and your community.
      </p>
      <Link to="/get-started" className="bg-[#DFB6B2] py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 font-inter">
        Get Started
      </Link>

      {/* Features Section */}
      <div className="w-full max-w-6xl mt-12 space-y-12">
        {/* Local Listings Feature */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <img src="src/components/c1.jpg" alt="Local Listings" className="w-full md:w-1/2 h-auto rounded-lg shadow-md" />
          <div className="w-full md:w-1/2 md:pl-6 flex flex-col items-start">
            <h2 className="text-2xl font-semibold mb-4 font-inter">Local Listings</h2>
            <p className="font-inter mb-4">Find What You Need, Just Around The Corner.</p>
            <Link to="/listings" className="bg-[#DFB6B2] py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 font-inter">
              Get Started
            </Link>
          </div>
        </div>

        {/* Services Feature (Image on the Right) */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          <img src="src/components/c3.jpg" alt="Services" className="w-full md:w-1/2 h-auto rounded-lg shadow-md" />
          <div className="w-full md:w-1/2 md:pr-6 flex flex-col items-start">
            <h2 className="text-2xl font-semibold mb-4 font-inter">Services</h2>
            <p className="font-inter mb-4">Need a Hand? Your Neighbours Are Here to Help.</p>
            <Link to="/services" className="bg-[#DFB6B2] py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 font-inter">
              Get Started
            </Link>
          </div>
        </div>

        {/* Community Events Feature */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <img src="src/components/c4.avif" alt="Community Events" className="w-full md:w-1/2 h-auto rounded-lg shadow-md" />
          <div className="w-full md:w-1/2 md:pl-6 flex flex-col items-start">
            <h2 className="text-2xl font-semibold mb-4 font-inter">Community Events</h2>
            <p className="font-inter mb-4">Build Bonds Beyond Your Doorstep.</p>
            <Link to="/events" className="bg-[#DFB6B2] py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 font-inter">
              Get Started
            </Link>
          </div>
        </div>

        {/* Emergency Assistance Feature (Image on the Right) */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          <img src="src/components/c2.jpg" alt="Emergency Assistance" className="w-full md:w-1/2 h-auto rounded-lg shadow-md" />
          <div className="w-full md:w-1/2 md:pr-6 flex flex-col items-start">
            <h2 className="text-2xl font-semibold mb-4 font-inter">Emergency Assistance</h2>
            <p className="font-inter mb-4">When Urgency Strikes, Your Neighbours Have Your Back.</p>
            <Link to="/emergency" className="bg-[#DFB6B2] py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 font-inter">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
