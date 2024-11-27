import React from 'react';
import { useMyContext } from '../context/MyContext';

const Notification = () => {
  const { notification } = useMyContext();

  if (!notification.visible) return null;

  return (
    <div
      className={`fixed top-10 right-10 z-50 p-4 rounded-md shadow-md transition-transform duration-300 ${
        notification.isError ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
      }`}
      style={{ transform: notification.visible ? 'translateY(0)' : 'translateY(-100px)' }}
    >
      {notification.message}
    </div>
  );
};

export default Notification;
