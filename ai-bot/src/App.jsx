import ChatContainer from './components/ChatContainer';
import {Routes, Route} from "react-router-dom";


function App() {

  return (
    <div className='app flex justify-center items-center bg-white h-screen '>
      <Routes>
      <Route path= "/" element = {<ChatContainer /> } />
      </Routes>
      
    </div>
  )
}

export default App
