import React, { useState } from 'react';
import { XCircle } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle adding a new event
  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();

    if (newTitle && newDescription && newDate && newTime && newLocation) {
      const newEvent: Event = {
        id: Date.now(),
        title: newTitle,
        description: newDescription,
        date: newDate,
        time: newTime,
        location: newLocation,
        attendees: 0, // No attendees when event is created
      };

      setEvents([...events, newEvent]);
      setNewTitle('');
      setNewDescription('');
      setNewDate('');
      setNewTime('');
      setNewLocation('');
    }
  };

  // Function to delete an event
  const handleDeleteEvent = (id: number) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  // Function to join or leave an event as an attendee
  const handleToggleAttendance = (id: number) => {
    const updatedEvents = events.map((event) => {
      if (event.id === id) {
        return { ...event, attendees: event.attendees + 1 };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  // Function to filter events based on the search term
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#F6EFBD] p-6 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">Community Events</h1>

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-1/3"
        />
      </div>

      <p className="mb-4">
        Discover local events or create your own to bring the community together.
      </p>

      {/* Form to add new events */}
      <form onSubmit={handleAddEvent} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <input
              type="text"
              placeholder="Event Title"
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
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
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
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add Event
        </button>
      </form>

      {/* Display events */}
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="relative border shadow-lg rounded-md p-4">
            {/* Delete Button */}
            <button
              onClick={() => handleDeleteEvent(event.id)}
              className="absolute top-2 right-2 text-red-500"
            >
              <XCircle size={24} />
            </button>
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <p className="text-gray-700 mb-2">{event.description}</p>
            <p className="text-blue-600">📅 {event.date}</p>
            <p className="text-blue-600">⏰ {event.time}</p>
            <p className="text-blue-600 mb-2">📍 {event.location}</p>
            <p className="text-green-600 font-semibold mb-4">Attendees: {event.attendees}</p>
            <button
              onClick={() => handleToggleAttendance(event.id)}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Join Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
