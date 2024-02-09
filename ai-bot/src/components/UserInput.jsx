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
    <div className='flex items-center justify-center py-4' onSubmit={handleSubmit}>
        <form className='bg-white rounded flex'>
            <input 
            type='text' 
            placeholder='write a prompt...' 
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
            className="shadow appearance-none border rounded-1 py-2 px-3 text-black-900 focus:outline-none focus:border-blue-500 flex-1 sm:w-auto" />  
            <button className='bg-green-500 hover:bg-green-400 text-white font bold px-4 py-2 rounded-1 focus:outline-none focus:shadow-outline' type='submit'> 
            send
            </button>      
        </form>        
    </div>
  )
}

export default UserInput