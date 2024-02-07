import React from 'react'
import Message from './Message'
import UserInput from './UserInput'

const ChatContainer = () => {
  return (
    <div className='container'>
        <Message />
        <UserInput />
    </div>
  )
}

export default ChatContainer