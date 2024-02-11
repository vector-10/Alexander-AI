import React from 'react';

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col justify-between h-screen bg-gray-800 text-white ">     
        {/* Sidebar content */}
        <div className="p-4"> 
          {/* Sidebar links */}
          <ul>
           <li>Online Members</li>
           <br/>
           <li>Alexander</li>
           <li>You</li>
          </ul>
        </div>
      <div className='p-5 '>
        <p>VectorWare Technologies</p>
      </div>
    </div>
  );
};

export default Sidebar;
