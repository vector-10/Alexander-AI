// Message.js
import React from 'react';

const Message = ({ message }) => {
  const { text, sender, timestamp } = message;

  return (
    <div className={`message ${sender === 'user' ? 'user-message' : 'bot-message'}`}>
      <p>{text}</p>
      <span className="message-timestamp">{formatTimestamp(timestamp)}</span>
    </div>
  );
};

//  function to format timestamp (optional)
const formatTimestamp = (timestamp) => {
  // Implement your desired formatting logic here
  return timestamp.toLocaleString(); // Example: convert timestamp to a readable date/time format
};

export default Message;
