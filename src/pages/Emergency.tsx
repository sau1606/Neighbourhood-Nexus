import React, { useState } from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

interface EmergencyRequest {
  id: number;
  type: string;
  description: string;
  location: string;
  status: 'Pending' | 'Resolved';
}

const Emergency: React.FC = () => {
  const [requests, setRequests] = useState<EmergencyRequest[]>([]);
  const [newType, setNewType] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle adding a new emergency request
  const handleAddRequest = (e: React.FormEvent) => {
    e.preventDefault();

    if (newType && newDescription && newLocation) {
      const newRequest: EmergencyRequest = {
        id: Date.now(),
        type: newType,
        description: newDescription,
        location: newLocation,
        status: 'Pending',
      };

      setRequests([...requests, newRequest]);
      setNewType('');
      setNewDescription('');
      setNewLocation('');
    }
  };

  // Function to delete an emergency request
  const handleDeleteRequest = (id: number) => {
    const updatedRequests = requests.filter((request) => request.id !== id);
    setRequests(updatedRequests);
  };

  // Function to mark an emergency request as resolved
  const handleResolveRequest = (id: number) => {
    const updatedRequests = requests.map((request) => {
      if (request.id === id) {
        return { ...request, status: 'Resolved' };
      }
      return request;
    });
    setRequests(updatedRequests);
  };

  // Function to filter emergency requests based on search term
  const filteredRequests = requests.filter((request) =>
    request.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <div className="w-3/4 bg-[#F6EFBD] p-6 min-h-screen">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-6">Emergency Assistance</h1>

          {/* Search Box */}
          <input
            type="text"
            placeholder="Search emergencies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md w-1/3"
          />
        </div>

        <p className="mb-4">
          Request urgent help or offer assistance to neighbors in need.
        </p>

        {/* Form to add new emergency requests */}
        <form onSubmit={handleAddRequest} className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                placeholder="Type of Assistance (e.g., Medical, Security)"
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Location"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Add Emergency Request
          </button>
        </form>

        {/* Display emergency requests */}
        <h2 className="text-2xl font-bold mb-4">Emergency Requests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests.map((request) => (
            <div key={request.id} className="relative border shadow-lg rounded-md p-4">
              {/* Delete Button */}
              <button
                onClick={() => handleDeleteRequest(request.id)}
                className="absolute top-2 right-2 text-red-500"
              >
                <XCircle size={24} />
              </button>

              {/* Request Information */}
              <h3 className="text-xl font-bold mb-2">{request.type}</h3>
              <p className="text-gray-700 mb-2">{request.description}</p>
              <p className="text-blue-600">📍 {request.location}</p>
              <p className={`font-semibold ${request.status === 'Resolved' ? 'text-green-600' : 'text-red-600'}`}>
                Status: {request.status}
              </p>

              {/* Resolve Request Button */}
              {request.status === 'Pending' && (
                <button
                  onClick={() => handleResolveRequest(request.id)}
                  className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Mark as Resolved
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SOS Helplines Bar */}
      <div className="w-1/4 bg-gray-100 p-6 sticky top-0 h-screen">
        <h2 className="text-2xl font-bold mb-4">SOS Helplines</h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span>🚨 Police</span>
            <span className="font-bold">100</span>
          </li>
          <li className="flex justify-between items-center">
            <span>🚑 Ambulance</span>
            <span className="font-bold">102</span>
          </li>
          <li className="flex justify-between items-center">
            <span>🚒 Fire</span>
            <span className="font-bold">101</span>
          </li>
          <li className="flex justify-between items-center">
            <span>👩‍⚕️ Women Helpline</span>
            <span className="font-bold">1091</span>
          </li>
          <li className="flex justify-between items-center">
            <span>🚨 Disaster Management</span>
            <span className="font-bold">108</span>
          </li>
          <li className="flex justify-between items-center">
            <span>👨‍⚕️ Covid Helpline</span>
            <span className="font-bold">1075</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Emergency;
