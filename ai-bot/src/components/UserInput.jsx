import React, { useState } from 'react'

const UserInput = ( { onSendMessage }) => {
    const [ inputMessage, setInputMessage ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputMessage.trim() !== '') {
            onSendMessage(inputMessage);  // to call the onsend message prop with input value
            setInputMessage('');  // clear the input field
        }
    }

  return (
    <div className='user input flex justify-center items-center' onSubmit={handleSubmit}>
        <form className='bg-white rounded px-8 pt-6 pb-8 mb-2 flex '>
            <input 
            type='text' 
            placeholder='write a prompt...' 
            value={inputMessage}
            onChange={(event) => setInputMessage(event.target.value)}
            className='shadow appearance-none border rounded w-full py-2 px-3 text-black-900'/>      
            <button className='bg-green-500 hover:bg-green-400 text-white font bold px-4 py-2 rounded focus:outline-none focus:shadow-outline' type='submit'> 
            send
            </button>      
        </form>        
    </div>
  )
}

export default UserInput