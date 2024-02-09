import React from 'react';

const Message = ({ message }) => {
  const { text, sender, timestamp } = message;

  return (
    <div>      
      <p className='font-bold text-sm'>{sender}</p>
    <div className={`message p-2 m-2 rounded max-w-96 ${sender === 'You' ? 'user-message bg-blue-200 mr-auto' : 'alexander bg-green-200 ml-auto '}`}>      
      <p className='text-lg'>{text}</p>
      <span className="message-timestamp text-xs">{formatTimestamp(timestamp)}</span>
    </div>
    </div>
  );
};

//  function to format timestamp 
const formatTimestamp = (timestamp) => {
  return timestamp.toLocaleString(); // convert timestamp to a readable date/time format
};

export default Message;
