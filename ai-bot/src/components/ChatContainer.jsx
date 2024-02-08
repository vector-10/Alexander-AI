import React, { useState } from 'react';
import Message from './Message'
import UserInput from './UserInput'

const ChatContainer = () => {
    const [ chatHistory, setChatHistory ] = useState([]);

    const sendToChatbot = async () => {
        try {
            const botResponse = await sendMessageTo
        } catch (error) {
            
        }
    }
  return (
    <div className='chat-container'>
        <Message />
        <UserInput />
    </div>
  )
}

export default ChatContainer