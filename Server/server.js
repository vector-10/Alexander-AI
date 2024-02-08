require('dotenv').config();
const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const app        = express();
const openAI     = require('openai');

const openai = new openAI.OpenAI()
app.use(bodyParser.json());
app.use(cors());


app.post('/api/sendMessage', async(req, res) => {
  try {
    //Extract the user message from the request body    
    const userMessage = req.body.message
    // chat completion from the openAI bot
    const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: userMessage }, { role: "user", content: userMessage }, { role: "assistant", content: userMessage }],
    model: "gpt-3.5-turbo",
    })
    // Extract the AI response from openAI API response
    const botResponse = completion.choices[0].message.content;
    res.json({ userMessage, botResponse });
    //console.log(completion.choices[0]); 
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error'})
  }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})