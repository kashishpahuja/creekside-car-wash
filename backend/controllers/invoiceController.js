// controllers/invoiceController.js
const nodemailer = require("nodemailer");

const sendInvoiceEmail = async (customerEmail, price) => {
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: `Creekside Car Wash <${process.env.EMAIL}>`,
      to: customerEmail, // Send invoice to the customer's email
      subject: `Invoice for Your Payment of $${price}`,
      text: `Thank you for your payment! Here is your invoice:

      Invoice Details:
      Amount: $${price}
      Date: ${new Date().toLocaleDateString()}
      
      Thank you for choosing Creekside Car Wash!
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Invoice sent to ${customerEmail}`);
  } catch (error) {
    console.error("Error sending invoice:", error);
  }
};

module.exports = { sendInvoiceEmail };
