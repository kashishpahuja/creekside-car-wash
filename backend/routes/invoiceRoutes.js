// routes/invoiceRoutes.js
const express = require("express");
const { sendInvoiceEmail } = require("../controllers/invoiceController");

const router = express.Router();

// Route to send invoice email
router.post("/send-invoice", async (req, res) => {
  const { customerEmail, price } = req.body;

  try {
    await sendInvoiceEmail(customerEmail, price);
    res.status(200).json({ message: "Invoice sent successfully!" });
  } catch (error) {
    console.error("Error sending invoice:", error);
    res.status(500).json({ error: "Failed to send invoice." });
  }
});

module.exports = router;
