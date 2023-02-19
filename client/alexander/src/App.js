import './App.css';
import React, {useState} from 'react';
import Title from './components/Title';
import Welcome from './components/Welcome';
import axios   from 'axios';



function App() { 
  //initialize state for the Message and response prompt
  const [message, setMessage] = useState();
  const [response, setResponse] = useState();

  
const url ='http://localhost:3001/api/v1/'

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const {data} = await axios.post(url, {
      message
    })
    setResponse(data.message)
  } catch (error) {
    console.log(error.messsage)
    
  }
}


// ALTERNATIVELY YOU CAN MAKE API CALL USING FETCH 

// const handleSubmit = (e) => {
//   e.preventDefault();
//   fetch('http://localhost:3001/api/v1/',{
//     method: 'POST',
//     headers:{
//       'content-Type': 'application/json'
//     },
//     body: JSON.stringify({message}),
//   })
//   .then((res) => res.json())
//   .then((data) => setResponse(data.message))
  
// }
 

  return (
    <div className='App'> 
     <Title />       
     <Welcome />      
    <div className='response-area'>
      {response}
    </div>
   <form onSubmit={handleSubmit} className="ai-form">
     <input
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Enter your message"
      type="text"
      ></input>
      <button type='submit'>Submit</button>
    </form>
    </div> 
    
   
  );
}

export default App;





