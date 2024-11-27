// context/MyContext.js
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
};

export const ContextProvider = ({ children }) => {
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

  return (
    <MyContext.Provider value={{ notification, showNotification }}>
      {children}
    </MyContext.Provider>
  );
};
