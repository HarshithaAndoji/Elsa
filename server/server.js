const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.get('/', async (req, res) => {
  console.log("Hello Server");
  
  res.status(200).json({ message: "Received successfully!" });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!email || !message || !name) {
    return res.status(400).json({ error: 'Missing fields' });
  }


  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or use another provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

await transporter.sendMail({
  from: process.env.EMAIL_USER, // your authenticated email
  to: process.env.EMAIL_USER,   // your inbox
  subject: `New Contact Form Submission from ${name}`,
  text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  replyTo: email                 // so "Reply" will go to the user
});

    res.status(200).json({ message: 'Message sent' });
    console.log("Message sent!")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });

  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
