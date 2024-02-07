require('dotenv').config();
const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const app        = express();
const openAI     = require('openai');

const openai = new openAI.OpenAI()
app.use(bodyParser.json());
app.use(cors());


  const main = async () => {
    const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "how can you advice someone to trade with forex" }],
    model: "gpt-3.5-turbo",
    })
    console.log(completion.choices[0]);
  }  

main();


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})