import React, { useState } from 'react';
import Message from './Message'
import UserInput from './UserInput'
import axios from 'axios';

const ChatContainer = () => {
    const [ chatHistory, setChatHistory ] = useState([]);
    const aiEndpoint = 'http://localhost:3001/api/sendmessage'

    const sendToChatbot = async (message) => {
        try {
            // send message to backend API
            const response = await axios.post(aiEndpoint, { message });
            // extract the user message and bot response from the API call
            const { botResponse } = response.data;
            // now to update chat history with bot message
            setChatHistory([...chatHistory, 
            { text: message, sender: 'You', timestamp: new Date() },
            { text: botResponse, sender: 'Alexander', timestamp: new Date() },])
        } catch (error) {
         console.error("Error retreiving message", error)   
        }
    }
    // jsx section
  return (
    <div className='chat-container'>
        {/* chat history */}
        {chatHistory.map((message, index) => (
        <Message key={index} message={message} />
      ))}
         {/* user input */}
        <UserInput onSendMessage={sendToChatbot} />
    </div>
  )
}

export default ChatContainer