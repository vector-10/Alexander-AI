import React from 'react';

const Message = ({ message }) => {
  const { text, sender, timestamp } = message;

  return (        
    <div className={`main-message p-2 m-2 rounded max-w-96 ${sender === 'You' ? 'user-message bg-gray-800 text-white ml-auto' : 'alexander bg-green-200 mr-auto '}`}>   
    <p className='text-xs'>{sender}</p>   
      <p className='text-lg font-medium'>{text}</p>
      <span className="message-timestamp text-xs">{formatTimestamp(timestamp)}</span>
    </div>
  );
};

//  function to format timestamp 
const formatTimestamp = (timestamp) => {
  return timestamp.toLocaleString(); // convert timestamp to a readable date/time format
};

export default Message;
