import React, { useState } from 'react';

const DistrictForm = () => {
  const [district, setDistrict] = useState({
    name: '',
    email: '',
    phone_number: ''
  });

  const handleChange = (e) => {
    setDistrict({
      ...district,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/districts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ district })
      });
      const data = await response.json();
      console.log('District created successfully', data);
    } catch (error) {
      console.error('There was an error creating the district:', error);
    }
  };

  return (
    <div className="flex justify-center items-center p-4 bg-gray-100 min-h-screen">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-[#030749] mb-6">Create District</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-[#030749]">District Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={district.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-[#030749]">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={district.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone_number" className="block text-lg font-medium text-[#030749]">Phone Number</label>
            <input
              id="phone_number"
              type="text"
              name="phone_number"
              value={district.phone_number}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full p-3 bg-[#0a54f5] text-white rounded-md hover:bg-[#0a54f5] focus:outline-none focus:ring-2 focus:ring-blue-500">
            Create District
          </button>
        </form>
      </div>
    </div>
  );
};

export default DistrictForm;
