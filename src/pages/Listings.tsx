import React, { useState } from 'react';
import { XCircle } from 'lucide-react';

interface Listing {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const Listings: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle new listing submission
  const handleAddListing = (e: React.FormEvent) => {
    e.preventDefault();

    if (newTitle && newDescription && newImageUrl && newPrice) {
      const newListing: Listing = {
        id: Date.now(), // Unique ID
        title: newTitle,
        description: newDescription,
        imageUrl: newImageUrl,
        price: newPrice,
      };

      setListings([...listings, newListing]);
      setNewTitle('');
      setNewDescription('');
      setNewImageUrl('');
      setNewPrice('');
    }
  };

  // Handle image upload and convert it to a URL for preview
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewImageUrl(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Function to delete a listing
  const handleDeleteListing = (id: number) => {
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
  };

  const filteredListings = listings.filter((listing) =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#F6EFBD] p-6 min-h-screen">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#190019]">Local Listings</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search listings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-[#854F6C] rounded-md"
          />
        </div>
      </div>

      {/* Form to add new listing */}
      <form onSubmit={handleAddListing} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <input
              type="text"
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="px-4 py-2 border border-[#854F6C] rounded-md w-full"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="px-4 py-2 border border-[#854F6C] rounded-md w-full"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Price"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              className="px-4 py-2 border border-[#854F6C] rounded-md w-full"
            />
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="px-4 py-2 w-full border border-[#854F6C] rounded-md"
            />
          </div>
          <div>
            {newImageUrl && (
              <img
                src={newImageUrl}
                alt="New Listing"
                className="w-32 h-32 object-cover mt-4 rounded-md shadow-md"
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-[#FFF7D1] text-[#664343] px-4 py-2 rounded-md hover:bg-[#854F6C]"
        >
          Add Listing
        </button>
      </form>

      {/* Display listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="relative border border-[#854F6C] shadow-lg rounded-md p-4 bg-white">
            {/* Delete Button */}
            <button
              onClick={() => handleDeleteListing(listing.id)}
              className="absolute top-2 right-2 text-red-500"
            >
              <XCircle size={24} />
            </button>
            <img
              src={listing.imageUrl}
              alt={listing.title}
              className="w-full h-48 object-cover rounded-t-md"
            />
            <div className="mt-4">
              <h2 className="text-xl font-bold text-[#190019]">{listing.title}</h2>
              <p className="text-gray-700">{listing.description}</p>
              <p className="text-lg font-semibold text-green-600">Price: ${listing.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
