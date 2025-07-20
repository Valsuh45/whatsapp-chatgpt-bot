# 📱 WhatsApp ChatGPT Bot (OpenRouter Version)

A simple Node.js WhatsApp bot that replies to incoming WhatsApp messages using a GPT model via [OpenRouter](https://openrouter.ai).
Built with Express, Twilio, and OpenRouter's API.

---

## Prerequisites
- Node.js + Express
- [Twilio WhatsApp Sandbox](https://www.twilio.com/docs/whatsapp/sandbox)
- [OpenRouter.ai (ChatGPT alternative)](https://openrouter.ai/)
- [ngrok](https://ngrok.com/)

---

## ✨ Features

- ✅ Receives WhatsApp messages
- ✅ Forwards messages to OpenRouter (ChatGPT-compatible)
- ✅ Sends the AI's reply back via WhatsApp
- ✅ Runs locally with ngrok or 24/7 when deployed

---

## 🚀 Local Development

**1️⃣ Clone this repo**

```bash
git clone https://github.com/Valsuh45/whatsapp-chatgpt-bot.git
cd whatsapp-chatgpt-bot
npm install
```

**2️⃣ Create a `.env` file**

```env
OPENROUTER_API_KEY=YOUR_OPENROUTER_API_KEY
```

**3️⃣ Start your server**

```bash
npm start
```

**4️⃣ Expose it with ngrok**

```bash
ngrok http 3000
```

**5️⃣ Set Twilio webhook**
In your Twilio WhatsApp Sandbox:

```
<YOUR_NGROK_URL>/whatsapp
```

---

## 🔑 Twilio WhatsApp Sandbox Setup

1. Sign up for Twilio
2. Activate your Sandbox
3. Connect your phone number or Use the test number provided by Twilio
4. Set the **Webhook URL** to your ngrok URL.

## 💡 Notes
- Your Twilio number must be in Sandbox mode or a verified number for testing.
