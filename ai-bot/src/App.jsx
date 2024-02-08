import { useState } from 'react'
import ChatContainer from './components/ChatContainer';


function App() {
  const [count, setCount] = useState("")

  return (
    <div className='app flex justify-center items-center bg-white'>
      <ChatContainer />
    </div>
  )
}

export default App
