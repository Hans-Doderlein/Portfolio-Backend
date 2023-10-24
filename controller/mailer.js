const router = require("express").Router();

const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    // Create a transporter object using your email service
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use your email service (e.g., Gmail, Outlook)
      auth: {
        user: "restropos1@gmail.com", // Your email address
        pass: "kuiq qhjn qeir ikni", // Your email password or app-specific password
      },
    });

    // Compose email data
    const mailOptions = {
      from: "restropos1@gmail.com", // Sender's email address
      to: req.body.email, // Recipient's email address
      subject: "Contact Message", // Email subject
      text: `Hello,
        Thank you for sending a message via my portfolio.
        
        I appreciate your interest in my work and will get back to you as soon as I can.

        Should you have any other questions or comments feel free to send another message.

        Have a wonderful rest of the day. I look forward to speaking with you shortly.`, // Email content (plain text)
    };

    // Compose email data
    const mailOptions2 = {
      from: "restropos1@gmail.com", // Sender's email address
      to: "hans.doderlein99@gmail.com", // Recipient's email address
      subject: "Portfolio Message", // Email subject
      text: `Name: ${req.body.name}.
      Email:${req.body.email}

        ${req.body.message}`, // Email content (plain text)
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    transporter.sendMail(mailOptions2, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(200).json({ message: "Emails sent" });
  } catch (error) {
    res.status(500).json({ message: "Emails not sent" });
  }
});

module.exports = router;
