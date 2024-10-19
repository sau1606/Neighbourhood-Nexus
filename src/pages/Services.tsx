import React, { useState } from 'react';
import { XCircle } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  contact: string;
  type: 'offer' | 'request'; // Either 'offer' or 'request'
}

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newContact, setNewContact] = useState('');
  const [serviceType, setServiceType] = useState<'offer' | 'request'>('offer');
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle adding a new service
  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();

    if (newTitle && newDescription && newContact) {
      const newService: Service = {
        id: Date.now(),
        title: newTitle,
        description: newDescription,
        contact: newContact,
        type: serviceType, // Offer or request
      };

      setServices([...services, newService]);
      setNewTitle('');
      setNewDescription('');
      setNewContact('');
      setServiceType('offer'); // Reset type to 'offer'
    }
  };

  // Function to delete a service
  const handleDeleteService = (id: number) => {
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices);
  };

  // Function to filter services based on search term
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#F6EFBD] p-6 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">Services</h1>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-1/3"
        />
      </div>

      <p className="mb-4">Find local services or offer your skills to the community.</p>

      {/* Form to add new service or request */}
      <form onSubmit={handleAddService} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <input
              type="text"
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
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
              placeholder="Contact Info"
              value={newContact}
              onChange={(e) => setNewContact(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value as 'offer' | 'request')}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            >
              <option value="offer">Offer a Service</option>
              <option value="request">Request a Service</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add Service
        </button>
      </form>

      {/* Display offered services */}
      <h2 className="text-2xl font-bold mb-4">Offered Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredServices
          .filter((service) => service.type === 'offer')
          .map((service) => (
            <div key={service.id} className="relative border shadow-lg rounded-md p-4">
              {/* Delete Button */}
              <button
                onClick={() => handleDeleteService(service.id)}
                className="absolute top-2 right-2 text-red-500"
              >
                <XCircle size={24} />
              </button>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-2">{service.description}</p>
              <p className="text-blue-600 font-semibold">Contact: {service.contact}</p>
            </div>
          ))}
      </div>

      {/* Display service requests */}
      <h2 className="text-2xl font-bold mb-4">Service Requests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices
          .filter((service) => service.type === 'request')
          .map((service) => (
            <div key={service.id} className="relative border shadow-lg rounded-md p-4">
              {/* Delete Button */}
              <button
                onClick={() => handleDeleteService(service.id)}
                className="absolute top-2 right-2 text-red-500"
              >
                <XCircle size={24} />
              </button>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-2">{service.description}</p>
              <p className="text-blue-600 font-semibold">Contact: {service.contact}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Services;
