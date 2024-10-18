import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Neighborhood Nexus</h1>
      <p className="text-xl mb-8">Connect with your neighbors, share resources, and build a stronger community.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/listings" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Local Listings</h2>
          <p>Buy, sell, or trade items with your neighbors.</p>
        </Link>
        <Link to="/services" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <p>Offer your skills or find help from local experts.</p>
        </Link>
        <Link to="/events" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Community Events</h2>
          <p>Discover and organize local gatherings and activities.</p>
        </Link>
        <Link to="/emergency" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Emergency Assistance</h2>
          <p>Request or offer help during urgent situations.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;