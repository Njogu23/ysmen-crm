import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; 

export default function SideBarNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex h-screen bg-[#f7f7f7]">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-[#030749] text-white w-64 p-5 transition-transform duration-300 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}
        >
          <h2 className="text-2xl font-bold text-center text-white mb-10">KD CMS</h2>
          <nav className="space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-lg font-medium ${
                  isActive ? 'bg-[#0a54f5] text-white' : 'hover:bg-[#fd5507] hover:text-white'
                }`
              }
            >
              Hero Section
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-lg font-medium ${
                  isActive ? 'bg-[#0a54f5] text-white' : 'hover:bg-[#fd5507] hover:text-white'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/activities"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-lg font-medium ${
                  isActive ? 'bg-[#0a54f5] text-white' : 'hover:bg-[#fd5507] hover:text-white'
                }`
              }
            >
              Activities
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-lg font-medium ${
                  isActive ? 'bg-[#0a54f5] text-white' : 'hover:bg-[#fd5507] hover:text-white'
                }`
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/publications"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-lg font-medium ${
                  isActive ? 'bg-[#0a54f5] text-white' : 'hover:bg-[#fd5507] hover:text-white'
                }`
              }
            >
              Publications
            </NavLink>
            <NavLink
              to="/what-we-do"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-lg font-medium ${
                  isActive ? 'bg-[#0a54f5] text-white' : 'hover:bg-[#fd5507] hover:text-white'
                }`
              }
            >
              What We Do
            </NavLink>
            <NavLink
              to="/add-club"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-lg font-medium ${
                  isActive ? 'bg-[#0a54f5] text-white' : 'hover:bg-[#fd5507] hover:text-white'
                }`
              }
            >
              Add Club
            </NavLink>
            {/* <NavLink
              to="/add-district"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-lg font-medium ${
                  isActive ? 'bg-[#0a54f5] text-white' : 'hover:bg-[#fd5507] hover:text-white'
                }`
              }
            >
              Add District
            </NavLink> */}
          </nav>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-3 bg-[#030749] text-white rounded-full lg:hidden"
        >
          {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Main Content */}
        <div className={`flex-1 p-6 transition-all duration-300 lg:ml-64 ${isSidebarOpen ? 'ml-64' : ''}`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
