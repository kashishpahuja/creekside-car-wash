require("dotenv").config(); 
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const fetch = require("node-fetch");
const cors = require("cors");
const paymentRoutes = require("./routes/paymentRoutes")
const { google } = require("googleapis");
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



// google calendar OAuth2 setup
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI,
);
oauth2Client.setCredentials({
  refresh_token:process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({version:"v3",auth:oauth2Client})



app.post("/booking", async (req, res) => {
  const {
    fname,
    lname,
    email,
    phone,
    address,
    recaptchaToken,
    carType,
    washingPlan,
    washingPrice,
    bookingDate,
    bookingTime,
    addedServices,
    totalPrice
  } = req.body;

  console.log("Received Booking Data:", req.body);

  try {
    // Verify reCAPTCHA Token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

    try {
      const recaptchaResponse = await fetch(recaptchaUrl, { method: "POST" });
      const recaptchaData = await recaptchaResponse.json();
      const { success } = recaptchaData;

      if (!success) {
        return res.status(400).json({
          error: "reCAPTCHA verification failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("reCAPTCHA verification error:", error);
      return res.status(500).json({ error: "Failed to verify reCAPTCHA." });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Formatting addedServices array
    const addedServicesHtml = addedServices.length
      ? `<ul>${addedServices.map((service) => `<li>${service}</li>`).join("")}</ul>`
      : "<p>No additional services selected.</p>";

    // Email options
    const mailOptions = {
      from: `Creekside Car Wash <${process.env.EMAIL}>`,
      to: process.env.receiverEMAIL,
      subject: `Detailing Booking from ${fname}`,
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="margin-bottom: 15px; border-bottom: 2px solid #000; padding-bottom: 5px;">Creekside Car Wash - New Booking</h2>
        <p><strong>First Name:</strong> ${fname}</p>
        <p><strong>Last Name:</strong> ${lname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Car Type:</strong> ${carType}</p>
        <p><strong>Washing Plan:</strong> ${washingPlan} (${washingPrice})</p>
        <p><strong>Booking Date:</strong> ${bookingDate}</p>
        <p><strong>Booking Time:</strong> ${bookingTime}</p>
        <p><strong>Total Price:</strong> $${totalPrice}</p>
        <p><strong>Additional Services:</strong> ${addedServicesHtml}</p>
      </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

// Function to convert 12-hour format (1:00 pm) to 24-hour format (13:00)
function convertTo24Hour(time) {
  const [timeStr, modifier] = time.split(" ");
  let [hours, minutes] = timeStr.split(":");

  if (modifier.toLowerCase() === "pm" && hours !== "12") {
    hours = String(parseInt(hours, 10) + 12);
  } else if (modifier.toLowerCase() === "am" && hours === "12") {
    hours = "00";
  }

  return `${hours}:${minutes}`;
}

// Convert bookingTime before using it
const formattedTime = convertTo24Hour(bookingTime);

const startDateTime = new Date(`${bookingDate}T${formattedTime}:00`);
if (isNaN(startDateTime.getTime())) {
  return res.status(400).json({ error: "Invalid booking date/time format." });
}

const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);


    // add event to google calender 
    const event = {
      summary:`Car Wash Appointment - ${fname} ${lname}`,
      location:address,
      description:`Service: ${washingPlan},\nAdditional Services:  ${Array.isArray(addedServices) ? addedServices.join(", ") : "None"},/nTotal Price: $${totalPrice}`,

      start:{
        dateTime: startDateTime.toISOString(),
        timezone:"Asia/Kolkata",
      },
      end:{
        dateTime:endDateTime.toISOString(),
        timezone:"Asia/Kolkata",
      },
      attendees:[{email:email}],
      reminders:{
        useDefault: false,
        overrides:[
          {method:"email",minutes:60},
          {method:"popup",minutes:10},
        ],
      },
    };
    const calendarEvent = await calendar.events.insert({
      calendarId:process.env.GOOGLE_CALENDAR_ID,
      resource: event,
    })
console.log("Event created:", calendarEvent.data.htmlLink);


    res.status(200).json({ 
      message: "Your booking has been sent successfully!" ,
      eventLink:calendarEvent.data.htmlLink,

    });
  } catch (error) {
    console.error("Error processing booking:", error);
    res.status(500).json({ error: "Failed to process booking. Please try again later." });
  }
});



app.post("/send-fleet", async (req, res) => {
  const { fname, lname, company, vehicles, email, phone, message, location_from, recaptchaToken, fleetServices  } = req.body;

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
      subject: `Fleet Form Submission from ${fname}`,
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #000;">
        <h2 style="margin-bottom: 10px; text-transform: uppercase; letter-spacing: 2px; border-bottom: 2px solid #000; padding-bottom: 5px;">
          Creekside Car Wash
        </h2>
        <p style="font-size: 18px; font-weight: bold;">You have a new message</p>
        <div style="padding: 20px; border-radius: 8px; max-width: 600px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1); text-align: left; border: 1px solid #ddd;">
          <p style="border-bottom: 1px solid #ddd; padding-bottom: 5px;"><strong>First Name:</strong> ${fname}</p>
          <p style="border-bottom: 1px solid #ddd; padding-bottom: 5px;"><strong>Last Name:</strong> ${lname}</p>
          <p style="border-bottom: 1px solid #ddd; padding-bottom: 5px;"><strong>Email:</strong> ${email}</p>
          <p style="border-bottom: 1px solid #ddd; padding-bottom: 5px;"><strong>Phone:</strong> ${phone}</p>
          <p style="border-bottom: 1px solid #ddd; padding-bottom: 5px;"><strong>Company:</strong> ${company}</p>
          <p style="border-bottom: 1px solid #ddd; padding-bottom: 5px;"><strong>Vehicles:</strong> ${vehicles}</p>
          <p style="border-bottom: 1px solid #ddd; padding-bottom: 5px;"><strong>Fleet Services:</strong> ${fleetServices.join(", ")}</p>
          <p><strong>Message:</strong></p>
          <p style="padding: 10px; border-radius: 5px; font-style: italic; background: #f9f9f9;">${message}</p>
        </div>
      </div>
    `
    
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



app.post("/send-mail", async (req, res) => {
  const { name, email, phone, message, location_from  } = req.body;

  try {

    
  // Verify reCAPTCHA Token

  // const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  // const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  // try {
  //   const recaptchaResponse = await fetch(recaptchaUrl, {
  //     method: "POST",
  //   });
  //   const recaptchaData = await recaptchaResponse.json();
  //   const { success } = recaptchaData;

  //   if (!success) {
  //     return res.status(400).json({
  //       error: "reCAPTCHA verification failed. Please try again.",
  //     });
  //   }
  // } catch (error) {
  //   // console.log("reCAPTCHA Response:", recaptchaData);

  //   console.error("reCAPTCHA verification error:", error);
  //   return res.status(500).json({ error: "Failed to verify reCAPTCHA." });
  // }



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
      subject: `New Contact Form Submission from ${name}`,
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #000;">
        <h2 style="margin-bottom: 10px; text-transform: uppercase; letter-spacing: 2px; border-bottom: 2px solid #000; padding-bottom: 5px;">
          Creekside Car Wash
        </h2>
        <p style="font-size: 18px; font-weight: bold;">You have a new message</p>
        <div style="padding: 20px; border-radius: 8px; max-width: 600px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1); text-align: left; border: 1px solid #ddd;">
          <p style="border-bottom: 1px solid #ddd; padding-bottom: 5px;"><strong>Name:</strong> ${name}</p>
          <p style="border-bottom: 1px solid #ddd; padding-bottom: 5px;"><strong>Email:</strong> ${email}</p>
          <p style="border-bottom: 1px solid #ddd; padding-bottom: 5px;"><strong>Phone:</strong> ${phone}</p>
          <p style="border-bottom: 1px solid #ddd; padding-bottom: 5px;"><strong>Location From:</strong> ${location_from}</p>
          <p><strong>Message:</strong></p>
          <p style="padding: 10px; border-radius: 5px; font-style: italic; background: #f9f9f9;">${message}</p>
        </div>
      </div>
    `
    
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
