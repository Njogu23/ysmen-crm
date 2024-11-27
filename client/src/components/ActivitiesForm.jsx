import React, { useState } from 'react';

const ActivitiesForm = () => {
  const [activities, setActivities] = useState({
    title: '',
    description: '',
    date: '',
    club_id: '',
    district_id: ''
  });

  const handleChange = (e) => {
    setActivities({
      ...activities,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ activities })
      });
      const data = await response.json();
      console.log('Club created successfully', data);
    } catch (error) {
      console.error('There was an error creating the club:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={activities.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={activities.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={activities.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Club</label>
        <input
          type="number"
          name="club_id"
          value={activities.club_id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>District</label>
        <input
          type="number"
          name="district_id"
          value={activities.district_id}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create Activities</button>
    </form>
  );
};

export default ActivitiesForm;
