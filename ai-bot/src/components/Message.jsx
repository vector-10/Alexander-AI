import React from 'react';

const Message = ({ message }) => {
  const { text, sender, timestamp } = message;

  return (
    <div className={`message ${sender === 'you' ? 'user-message bg-blue-200' : 'alexander bg-green-200'} m-2 rounded`}>
      <p className='font-bold'>{sender}</p>
      <p>{text}</p>
      <span className="message-timestamp">{formatTimestamp(timestamp)}</span>
    </div>
  );
};

//  function to format timestamp 
const formatTimestamp = (timestamp) => {
  return timestamp.toLocaleString(); // convert timestamp to a readable date/time format
};

export default Message;
