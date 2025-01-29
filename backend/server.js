require("dotenv").config(); // Load environment variables
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
// Allow requests from your HostGator frontend domain
// app.use(cors({
//   origin: "https://your-hostgator-domain.com",  // Replace with your actual frontend URL on HostGator
//   methods: ['GET', 'POST'],
//   credentials: true
// }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Email sending route
app.post("/send-mail", async (req, res) => {
  const { name, email, phone, location_form, message } = req.body;

  try {
    
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Replace with your email service (e.g., Gmail)
      auth: {
        user: process.env.EMAIL, // Your email address from .env
        pass: process.env.PASSWORD, // Your app password or email password
      },
    });

    // Email options
    const mailOptions = {
      from: `Creekside Car Wash<${process.env.EMAIL}>`,
      to: 'creeksidedetailz@gmail.com', // Your email to receive the form submission
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Location From: ${location_form}
      Message: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ message: "Your message has been sent successfully!" });


  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/send-mail`);
});
