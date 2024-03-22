import { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import Cards from '../components/cards';
import Post from '../components/post';

export default function Home() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState('discussion');

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

  return (
    <div>
      {/* Navbar (visible only in mobile view) */}
      {isMobileView && (
            <div className="flex">
              <Sidebar />
            {/* Navbar (visible only in mobile view) */}
            <div className="fixed top-0 left-0 w-full bg-gray-800 p-4 flex justify-center items-center z-50">
              <button className={`mx-2 p-2 text-white ${selectedColumn === 'discussion' ? 'bg-gray-600' : ''}`} onClick={() => setSelectedColumn('discussion')}>
                Discussion Forum
              </button>
              <button className={`mx-2 p-2 text-white ${selectedColumn === 'market' ? 'bg-gray-600' : ''}`} onClick={() => setSelectedColumn('market')}>
                Market Stories
              </button>
            </div>
      
            {/* Content */}
            <div className="w-full bg-gray-200">
              <div className="h-screen p-8">
                {selectedColumn === 'discussion' && (
                  <>
                    <h1 className="text-4xl font-bold">Discussion Forum</h1>
                    <Post/>
                      <Post/>
                      <Post/>
                      <Post/>
                  </>
                )}
                {selectedColumn === 'market' && (
                  <>
                    <h1 className="text-4xl font-bold mb-4">Market Stories</h1>
                    <Cards />
                    <Cards />
                      <Cards />
                  </>
                )}
              </div>
            </div>
          </div>
      )}

          {!isMobileView && (
            <div className="flex">
                <Sidebar />
                  {/* Left Column */}
                  <div className="w-2/3 bg-gray-200">
                    <div className="h-screen p-4 pl-8">
                      <h1 className="flex text-2xl font-bold justify-center">Discussion Fourm</h1>
                      <Post/>
                      <Post/>
                      <Post/>
                      <Post/>
                    </div>
                  </div>
          
                  {/* Right Column */}
                  <div className='w-1/3 bg-gray-200'>
                    <div className="h-screen p-4 pl-8">
                      <h1 className="text-2xl font-bold flex flex-wrap justify-center">Market Stories</h1>
                      <Cards />
                      <Cards />
                    </div>
                  </div>
                </div>
          )}

    </div>
  );
}
