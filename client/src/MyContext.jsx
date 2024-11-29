// context/MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
};

export const ContextProvider = ({ children }) => {
  const [heroSections, setHeroSections] = useState([]);
  const [aboutSections, setAboutSections] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedItem, setEditedItem] = useState(null);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState({
    visible: false,
    message: '',
    isError: false,
  });

  const showNotification = (message, isError = false) => {
    setNotification({
      visible: true,
      message,
      isError,
    });

    setTimeout(() => {
      setNotification({
        visible: false,
        message: '',
        isError: false,
      });
    }, 3000); // Hide notification after 3 seconds
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedItem(null);
};

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prev) => ({
        ...prev,
        [name]: value,
    }));
};

const handleEdit = (item) => {
  setEditingId(item.id);
  setEditedItem({ ...item });
};

  return (
    <MyContext.Provider value={{ 
      notification, 
      showNotification, 
      heroSections, 
      setHeroSections, 
      aboutSections,
      error, 
      setError, 
      setAboutSections,
      editedItem,
      editingId,
      setEditedItem,
      setEditingId,
      handleCancel,
      handleEdit,
      handleInputChange }}>
      {children}
    </MyContext.Provider>
  );
};
