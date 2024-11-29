// HeroSectionManager.jsx
import React, { useEffect, useState } from 'react';
import HeroSectionForm from './HeroSectionForm';
import HeroSectionDisplay from './HeroSectionDisplay';
import { useMyContext } from '../../MyContext';

const HeroSectionManager = () => {
    const { setHeroSections } = useMyContext();
    const [error, setError] = useState(null)

  const fetchHeroSections = async () => {
    try {
      const response = await fetch('http://[::1]:3000/hero_sections'); 
      if (!response.ok) {
        throw new Error('Failed to fetch hero sections');
      }
      const data = await response.json(); 
      setHeroSections(data); 
    } catch (error) {
      setError('Error fetching hero sections:', error);
    }
  };

  
  useEffect(() => {
    fetchHeroSections();
  }, []);

  return (
    <div>
      <HeroSectionDisplay error={error} setError={setError}/>
      <HeroSectionForm onFormSubmit={fetchHeroSections} />
    </div>
  );
};

export default HeroSectionManager;
