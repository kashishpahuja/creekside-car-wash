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
            currency: "cad", // Change this based on your currency
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
