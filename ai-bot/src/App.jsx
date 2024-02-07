import { useState } from 'react'
import ChatContainer from './components/ChatContainer';



function App() {
  const [count, setCount] = useState("")

  return (
    <div className='app content-center'>
      <ChatContainer />
    </div>
  )
}

export default App
