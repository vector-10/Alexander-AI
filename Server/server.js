require('dotenv').config();
const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const app        = express();
const openAI     = require('openai');

const { Configuration, OpenAIApi } = openAI;
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const handleError = async (req, res) => {
    if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }
  console.log(handleError.error.message)

} 
app.use(bodyParser.json());
app.use(cors());

app.post('/api/v1/', async (req, res) => {
  const {message} = req.body;
    const response = await openai.createCompletion({
        model:"text-davinci-003",
        prompt: `You are Alexandder-AI built by Blaise of VectorWare Technologies through openAI's API to help humans especially students with simple tasks
        user: ${message}`,
        max_tokens: 300,
        temperature:1.0,
    })
    console.log(response.data)
    if(response.data.choices[0].text){
      res.json({message: response.data.choices[0].text})
    }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})