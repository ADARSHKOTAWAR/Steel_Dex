import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email Route
app.post("/send-email", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Email and Message are required" });
  }

  try {
    // SMTP Transporter Setup
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use "smtp.gmail.com"
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    // Email Content
    const mailOptions = {
      from: email,
      to: "adarshkotawar@gmail.com", // Change to recipient email
      subject: subject || "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send Email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
