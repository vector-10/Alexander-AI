import React, { useState } from 'react'

const UserInput = ( { onSendMessage }) => {
    const [ inputMessage, setInputMessage ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputMessage.trim() !== '') {
            onSendMessage(inputMessage);  // to call the onsend message prop with input value
            // setInputMessage('');  // clear the input field
        }
    }

  return (
    <div className='footer p-2 h-20' >
        <form className='form w-full h-8 ' onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='write a prompt...' 
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
            className="message" />  
            <button className=' send-btn bg-green-500 hover:bg-green-400 text-white font bold px-4 py-2 ' type='submit'> 
            send
            </button>      
        </form>        
    {/* <div className='flex items-center justify-center py-4' onSubmit={handleSubmit}>
        <form className='bg-white rounded flex '>
            <input 
            type='text' 
            placeholder='write a prompt...' 
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
            className="block w-auto rounded ring-1 ring-inset ring-gray-300 p-2" />  
            <button className='bg-green-500 hover:bg-green-400 text-white font bold px-4 py-2 rounded-1 focus:outline-none focus:shadow-outline' type='submit'> 
            send
            </button>      
        </form>         */}
    </div>
  )
}

export default UserInput