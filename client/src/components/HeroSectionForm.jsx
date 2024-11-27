// components/HeroSectionForm.js
import React, { useState } from 'react';
import { useMyContext } from '../MyContext';

const HeroSectionForm = () => {
  const [heroSection, setHeroSection] = useState({
    title: '',
    subtitle: '',
    subtext: '',
    image: '',
    club_id: '',
    district_id: '',
  });
  const [isUploading, setIsUploading] = useState(false);
  const { showNotification } = useMyContext(); // Access the showNotification function

  const handleChange = (e) => {
    setHeroSection({
      ...heroSection,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ysmen_cms'); // Replace with your Cloudinary upload preset

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/njogu23/image/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setHeroSection((prev) => ({ ...prev, image: data.secure_url }));
      setIsUploading(false);
      showNotification('Image uploaded successfully!', false); // Success notification
    } catch (error) {
      console.error('Error uploading image:', error);
      setIsUploading(false);
      showNotification('Error uploading image!', true); // Error notification
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://[::1]:3000/hero_sections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(heroSection),
      });
      const data = await response.json();
      console.log('Hero section created successfully', data);
      showNotification('Hero section created successfully!', false); // Success notification
    } catch (error) {
      console.error('There was an error creating the hero section:', error);
      showNotification('Error creating hero section!', true); // Error notification
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Create Hero Section</h2>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={heroSection.title}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="subtitle" className="block text-sm font-medium text-gray-600">
            Subtitle
          </label>
          <input
            id="subtitle"
            type="text"
            name="subtitle"
            value={heroSection.subtitle}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="subtext" className="block text-sm font-medium text-gray-600">
            Subtext
          </label>
          <textarea
            id="subtext"
            name="subtext"
            value={heroSection.subtext}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows="3"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-600">
            Upload Image
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {isUploading && <p className="text-sm text-blue-500 mt-2">Uploading image...</p>}
          {heroSection.image && (
            <img src={heroSection.image} alt="Uploaded" className="mt-4 w-full h-32 object-cover rounded-lg" />
          )}
        </div>

        <div>
          <label htmlFor="club_id" className="block text-sm font-medium text-gray-600">
            Club ID
          </label>
          <input
            id="club_id"
            type="number"
            name="club_id"
            value={heroSection.club_id}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="district_id" className="block text-sm font-medium text-gray-600">
            District ID
          </label>
          <input
            id="district_id"
            type="number"
            name="district_id"
            value={heroSection.district_id}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Create Hero Section
        </button>
      </form>
    </div>
  );
};

export default HeroSectionForm;
