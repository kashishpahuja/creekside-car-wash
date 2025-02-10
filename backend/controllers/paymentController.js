// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Your Stripe secret key
// const nodemailer = require("nodemailer"); // For sending invoice emails

// // Send invoice email function
// const sendInvoiceEmail = async (customerEmail, price) => {
//   try {
//     // Create a transporter for sending the email
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL, // Your email address from .env
//         pass: process.env.PASSWORD, // Your app password or email password
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: `Creekside Car Wash <${process.env.EMAIL}>`,
//       to: customerEmail, // Send invoice to the customer's email
//       subject: `Invoice for Your Payment of $${price}`,
//       text: `Thank you for your payment! Here is your invoice:

//       Invoice Details:
//       Amount: $${price}
//       Date: ${new Date().toLocaleDateString()}
      
//       Thank you for choosing Creekside Car Wash!
//       `,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);
//     console.log(`Invoice sent to ${customerEmail}`);
//   } catch (error) {
//     console.error("Error sending invoice:", error);
//   }
// };

// // Handle Stripe Checkout session creation
// const createCheckoutSession = async (req, res) => {
//   try {
//     const { price } = req.body;

//     // Create a new checkout session with Stripe
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "usd", // Change this based on your currency
//             product_data: {
//               name: `Gift Card - $${price}`,
//             },
//             unit_amount: price * 100, // Amount in cents
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
//       cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
//     });

//     res.status(200).json({ id: session.id });
//   } catch (error) {
//     console.error('Error creating Stripe session:', error);
//     res.status(500).json({ error: 'Failed to create checkout session' });
//   }
// };

// // Handle Stripe Webhook for Payment Success
// const stripeWebhook = async (req, res) => {
//   const sig = req.headers['stripe-signature'];
//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);

//     if (event.type === 'checkout.session.completed') {
//       const session = event.data.object;
//       const customerEmail = session.customer_email;
//       const amountPaid = session.amount_total / 100; // Convert from cents to dollars

//       // Send invoice email to the customer after successful payment
//       await sendInvoiceEmail(customerEmail, amountPaid);
//       res.status(200).send("Invoice sent successfully!");
//     } else {
//       res.status(200).send("Event received but not handled.");
//     }
//   } catch (err) {
//     console.error('Webhook error:', err);
//     res.status(400).send(`Webhook error: ${err.message}`);
//   }
// };

// module.exports = {
//   createCheckoutSession,
//   stripeWebhook,
// };








const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Use your secret key

// Handle Stripe Checkout session creation
const createCheckoutSession = async (req, res) => {
  try {
    const { price } = req.body;

    // Create a new checkout session with Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd", // Change this based on your currency
            product_data: {
              name: `Gift Card - $${price}`,
            },
            unit_amount: price * 100, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
};

module.exports = {
  createCheckoutSession,
};
