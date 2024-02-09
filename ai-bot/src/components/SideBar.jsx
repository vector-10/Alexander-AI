import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <div className=" bg-gray-800 text-white">
        {/* Sidebar content */}
        <div className="p-4">
          <h1 className="text-lg font-semibold mb-4">Sidebar</h1>
          {/* Sidebar links */}
          <ul>
            <li className="mb-2"><a href="#" className="block px-4 py-2 hover:bg-gray-700">Link 1</a></li>
            <li className="mb-2"><a href="#" className="block px-4 py-2 hover:bg-gray-700">Link 2</a></li>
            {/* Add more sidebar links as needed */}
          </ul>
        </div>
      </div>  
    </div>
  );
};

export default Sidebar;
