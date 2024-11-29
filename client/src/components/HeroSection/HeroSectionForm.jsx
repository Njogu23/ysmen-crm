import React, { useState } from 'react';
import { useMyContext } from '../../MyContext';

const HeroSectionForm = ({ onFormSubmit }) => {
  const [heroSection, setHeroSection] = useState({
    title: '',
    subtitle: '',
    subtext: '',
    image: '',
    club_id: '',
  });
  const [isUploading, setIsUploading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const { showNotification } = useMyContext();

  const validateForm = () => {
    const errors = {};
    
    if (!heroSection.title.trim()) {
      errors.title = 'Title is required';
    }
    
    if (!heroSection.subtitle.trim()) {
      errors.subtitle = 'Subtitle is required';
    }
    
    if (!heroSection.subtext.trim()) {
      errors.subtext = 'Subtext is required';
    }
    
    if (!heroSection.image) {
      errors.image = 'Please upload an image';
    }
    
    if (!heroSection.club_id) {
      errors.club_id = 'Club ID is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHeroSection(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear specific field error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type and size
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      showNotification('Invalid file type. Please upload JPEG, PNG, or GIF.', true);
      return;
    }

    if (file.size > maxSize) {
      showNotification('File is too large. Maximum size is 5MB.', true);
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ysmen_cms');

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/njogu23/image/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      const data = await response.json();
      setHeroSection(prev => ({ 
        ...prev, 
        image: data.secure_url 
      }));
      
      // Clear image upload error if exists
      if (formErrors.image) {
        setFormErrors(prev => ({
          ...prev,
          image: ''
        }));
      }

      setIsUploading(false);
      showNotification('Image uploaded successfully!', false);
    } catch (error) {
      console.error('Error uploading image:', error);
      setIsUploading(false);
      showNotification('Failed to upload image. Please try again.', true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      showNotification('Please fill in all required fields', true);
      return;
    }

    try {
      const response = await fetch('http://[::1]:3000/hero_sections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(heroSection),
      });

      if (!response.ok) throw new Error('Failed to create hero section');

      setHeroSection({
        title: '',
        subtitle: '',
        subtext: '',
        image: '',
        club_id: '',
      });
      setFormErrors({});
      showNotification('Hero section created successfully!', false);
      if (onFormSubmit) onFormSubmit();
    } catch (error) {
      showNotification(error.message || 'Error creating hero section', true);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-700">Create Hero Section</h2>

          {/* Title Input */}
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
              className={`w-full p-3 mt-1 border ${
                formErrors.title ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
            {formErrors.title && (
              <p className="text-red-500 text-xs mt-1">{formErrors.title}</p>
            )}
          </div>

          {/* Subtitle Input */}
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
              className={`w-full p-3 mt-1 border ${
                formErrors.subtitle ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
            {formErrors.subtitle && (
              <p className="text-red-500 text-xs mt-1">{formErrors.subtitle}</p>
            )}
          </div>

          {/* Subtext Input */}
          <div>
            <label htmlFor="subtext" className="block text-sm font-medium text-gray-600">
              Subtext
            </label>
            <textarea
              id="subtext"
              name="subtext"
              value={heroSection.subtext}
              onChange={handleChange}
              className={`w-full p-3 mt-1 border ${
                formErrors.subtext ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
              rows="3"
            />
            {formErrors.subtext && (
              <p className="text-red-500 text-xs mt-1">{formErrors.subtext}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-600">
              Upload Image
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className={`w-full p-3 mt-1 border ${
                formErrors.image ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
            {isUploading && <p className="text-sm text-blue-500 mt-2">Uploading image...</p>}
            {heroSection.image && (
              <img 
                src={heroSection.image} 
                alt="Uploaded" 
                className="mt-4 w-full h-32 object-cover rounded-lg" 
              />
            )}
            {formErrors.image && (
              <p className="text-red-500 text-xs mt-1">{formErrors.image}</p>
            )}
          </div>

          {/* Club ID Input */}
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
              className={`w-full p-3 mt-1 border ${
                formErrors.club_id ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
            {formErrors.club_id && (
              <p className="text-red-500 text-xs mt-1">{formErrors.club_id}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isUploading}
            className="w-full py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isUploading ? 'Uploading...' : 'Create Hero Section'}
          </button>
        </form>
      </div>
    </>
  );
};

export default HeroSectionForm;