require("dotenv").config(); 
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const paymentRoutes = require("./routes/paymentRoutes")

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


app.use('/payment',paymentRoutes)


app.post("/send-mail", async (req, res) => {
  const { fname, lname, company, vehicles, email, phone, message, recaptchaToken, fleetServices  } = req.body;

  try {

    
  // Verify reCAPTCHA Token

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  try {
    const recaptchaResponse = await fetch(recaptchaUrl, {
      method: "POST",
    });
    const recaptchaData = await recaptchaResponse.json();
    const { success } = recaptchaData;

    if (!success) {
      return res.status(400).json({
        error: "reCAPTCHA verification failed. Please try again.",
      });
    }
  } catch (error) {
    // console.log("reCAPTCHA Response:", recaptchaData);

    console.error("reCAPTCHA verification error:", error);
    return res.status(500).json({ error: "Failed to verify reCAPTCHA." });
  }



  // Proceed to send the email if reCAPTCHA is successful
    
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
      from: `Creekside Car Wash <${process.env.EMAIL}>`,
      to: process.env.receiverEMAIL,
      subject: `New Contact Form Submission from ${fname}`,
      html: `
       <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #000; color: #fff;">
      <h2 style="margin-bottom: 10px; text-transform: uppercase; letter-spacing: 2px;">Creekside Car Wash</h2>
      <p style="font-size: 18px; font-weight: bold;">You have a new message</p>
      <div style="background: #111; padding: 20px; border-radius: 8px; max-width: 500px; margin: auto; box-shadow: 0px 4px 8px rgba(255,255,255,0.2); text-align: left;">
        <p style="border-bottom: 1px solid #444; padding-bottom: 5px;"><strong>First Name:</strong> ${fname}</p>
        <p style="border-bottom: 1px solid #444; padding-bottom: 5px;"><strong>Last Name:</strong> ${lname}</p>
        <p style="border-bottom: 1px solid #444; padding-bottom: 5px;"><strong>Email:</strong> ${email}</p>
        <p style="border-bottom: 1px solid #444; padding-bottom: 5px;"><strong>Phone:</strong> ${phone}</p>
        <p style="border-bottom: 1px solid #444; padding-bottom: 5px;"><strong>Company:</strong> ${company}</p>
        <p style="border-bottom: 1px solid #444; padding-bottom: 5px;"><strong>Vehicles:</strong> ${vehicles}</p>
                    <p><strong>Fleet Services:</strong> ${fleetServices.join(", ")}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #222; padding: 10px; border-radius: 5px; font-style: italic; color: #ddd;">${message}</p>
      </div>
    </div>
      `,
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
