import React, { useState } from 'react'

const UserInput = ( { onSendMessage }) => {
    const [ inputMessage, setInputMessage ] = useState('');

    const sendMessage = () => {
        if(inputMessage.trim !== '') {
            onSendMessage(inputMessage);  // to call the onsend message prop with input value
            setInputMessage('');  // clear the input field
        }
    }
  return (
    <div className='user input w-full max-w-md flex justify-center items-center'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2 flex '>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-black-900' type='text' placeholder='write a prompt'/>      
            <button className='bg-green-400 hover:bg-green-500 text-white font bold px-4 py-2 rounded focus:outline-none focus:shadow-outline' type='button'> 
            send
        </button>      
        </form>
        
    </div>
  )
}

export default UserInput