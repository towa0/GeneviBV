const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.post("/api/submit-form", async (req, res) => {
  if (formData.honeypot) {
    return res.status(400).send("Spam submission detected.");
  }

  try {
    const formData = req.body;
    const currentDate = new Date().toLocaleString();
    const emailBody = `
        Form submitted on: ${currentDate}
        Naam: ${formData.Naam}
        Email: ${formData.Email}
        Woonplaats: ${formData.Woonplaats}
        Tel nummer: ${formData["Telefoon nummer"]}
        Interesse: ${formData["Waar gaat uw interesse naar uit?"]}
        Bericht: ${formData.Opmerkingen}
  `;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: "janssenkyran999@gmail.com",
      subject: `Genevi Form - ${currentDate}`,
      text: emailBody,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    res.status(200).send("Form submitted successfully");
  } catch (error) {
    console.error("Error processing form submission:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
