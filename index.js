require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// ✅ Use your OpenRouter API key and base URL
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

app.post("/whatsapp", async (req, res) => {
  const incomingMsg = req.body.Body;
  console.log("Incoming:", incomingMsg);

  try {
    const completion = await openai.chat.completions.create({
      model: "mistralai/mistral-7b-instruct", // ✅ pick any available model
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: incomingMsg },
      ],
    });

    const answer = completion.choices[0].message.content;
    console.log("Answer:", answer);

    // Return TwiML for WhatsApp reply
    res.type("text/xml");
    res.send(`<Response><Message>${answer}</Message></Response>`);
  } catch (err) {
    console.error("Error:", err);
    if (err.response) {
      const text = await err.response.text();
      console.error("Response:", text);
    }
    res.type("text/xml");
    res.send(
      `<Response><Message>Oops! Something went wrong.</Message></Response>`,
    );
  }
});

app.listen(3000, () => {
  console.log("Bot running on http://localhost:3000");
});
