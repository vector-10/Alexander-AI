require('dotenv').config();
const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const app        = express();
const openAI     = require('openai');

const openai = new openAI.OpenAI()
app.use(bodyParser.json());
app.use(cors());


app.post('/api/sendmessage', async(req, res) => {
  try {    
    //set the user message to the request body for API call
  const userMessage = req.body.message;
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: userMessage }],
    model: "gpt-3.5-turbo",
    })
    const botResponse = completion.choices[0].message.content
    res.status(200).json({ botResponse })
    console.log(completion.choices[0])
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error'})    
  };

})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})


