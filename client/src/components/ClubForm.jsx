import React, { useState } from 'react';

const ClubForm = () => {
  const [club, setClub] = useState({
    name: '',
    email: '',
    phone_number: '',
    location: '',
    date_of_charter: '',
    district_id: 1,
  });
  const [notification, setNotification] = useState({ message: '', isError: false, visible: false });

  const handleChange = (e) => {
    setClub({ 
      ...club,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotification({ ...notification, visible: false }); // Hide any existing notification
    try {
      const response = await fetch('http://localhost:3000/clubs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ club }),
      }); 

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to create club:', errorData);
        setNotification({
          message: `Failed to create club: ${errorData.message || 'Unknown error'}`,
          isError: true,
          visible: true,
        });
        return;
      }

      const data = await response.json();
      console.log('Club created successfully:', data);

      // Clear the form fields after a successful submission
      setClub({
        name: '',
        email: '',
        phone_number: '',
        location: '',
        date_of_charter: '',
        district_id: 1,
      });

      setNotification({
        message: 'Club created successfully!',
        isError: false,
        visible: true,
      });
    } catch (error) {
      console.error('There was an error creating the club:', error);
      setNotification({
        message: 'An unexpected error occurred. Please try again.',
        isError: true,
        visible: true,
      });
    }

    // Automatically hide notification after 3 seconds
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, visible: false }));
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center p-4 bg-gray-100 min-h-screen relative">
      {/* Pop-Out Notification */}
      {notification.visible && (
        <div
        className={`fixed top-10 right-10 z-50 p-4 rounded-md shadow-md transition-transform duration-300 ${
          notification.isError ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
        }`}
        style={{ transform: notification.visible ? 'translateY(0)' : 'translateY(-100px)' }}
      >
        {notification.message}
      </div>
      )}

      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-[#030749] mb-6">Create Club</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-[#030749]">
              Club Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={club.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-[#030749]">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={club.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone_number" className="block text-lg font-medium text-[#030749]">
              Phone Number
            </label>
            <input
              id="phone_number"
              type="text"
              name="phone_number"
              value={club.phone_number}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-lg font-medium text-[#030749]">
              Location
            </label>
            <input
              id="location"
              type="text"
              name="location"
              value={club.location}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="date_of_charter" className="block text-lg font-medium text-[#030749]">
              Date of Charter
            </label>
            <input
              id="date_of_charter"
              type="date"
              name="date_of_charter"
              value={club.date_of_charter}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-[#0a54f5] text-white rounded-md hover:bg-[#0a54f5] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Club
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClubForm;
