// components/Sidebar.js

import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    // Initial check for mobile view on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Set sidebar state based on screen size
    setIsSidebarOpen(!isMobileView);
  }, [isMobileView]);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar */}
      {!isMobileView &&
        <div className={`inset-y-0 left-0 z-50 bg-gray-800 text-white w-64 px-4 py-6 transition-transform duration-300 transform ${isSidebarOpen ? '-translate-x-full fixed' : '-translate-x-0 relative'}`}>
        {/* Sidebar Content */}
        <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
                  {/* User Info */}
                  <div className="flex items-center mb-4">
            <img src="/user.png" alt="User" className="w-10 h-10 rounded-full mr-2" />
            <span>Hello, user</span>
          </div>
          <ul>
        {['Discussion Fourm', 'Market Stories', 'Sentiments', 'Markets', 'Sector', 'Watchlist', 'Events', 'News/interview'].map((item, index) => (
          <li
            key={index}
            className={`py-3 cursor-pointer rounded-lg p-4 ${selectedItem === index ? 'bg-gray-900' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
        </div>
      }
      {isMobileView &&
        <div className={`fixed inset-y-0 left-0 z-50 bg-gray-800 text-white w-64 px-4 py-6 transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Sidebar Content */}
        <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
                          {/* User Info */}
                          <div className="flex items-center mb-4">
            <img src="/user.png" alt="User" className="w-10 h-10 rounded-full mr-2" />
            <div className='flex gap-20'>
              <span>Hello, user</span>
              <span className="left-6" onClick={toggleSidebar}>X</span>
              </div>
          </div>
          <ul>
        {['Discussion Fourm', 'Market Stories', 'Sentiments', 'Markets', 'Sector', 'Watchlist', 'Events', 'News/interview'].map((item, index) => (
          <li
            key={index}
            className={`py-3 cursor-pointer rounded-lg p-4 ${selectedItem === index ? 'bg-gray-900' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
        </div>

      }

      {/* Toggle Button */}
      <div className='sticky top-[35%] flex w-3 h-40 justify-center'>
      <button className={`text-white bg-gray-800 px-4 py-2 rounded-lg ${isSidebarOpen ? 'left-64':''}`} onClick={toggleSidebar}>
        {isSidebarOpen ? '>' : '<'}
      </button>
      </div>
    </>
  );
};

export default Sidebar;
