import React from 'react';

const Sidebar = () => {
  return (
    <div className="flex flex-row h-screen bg-gray-800 text-white ">     
        {/* Sidebar content */}
        <div className="p-4">
          <h1 className="text-lg font-bold mb-4">Alexander-AI</h1>
          {/* Sidebar links */}
          <ul>
           <li>Chat Members</li>
           <br/>
           <li>Alexander</li>
           <li>You</li>
          </ul>
        </div>
      <div className='flex justify-center items-end p-5'>
        <p>VectorWare Technologies</p>
      </div>
    </div>
  );
};

export default Sidebar;
