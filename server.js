const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// =========================
// 📂 DOWNLOAD CV ENDPOINT
// =========================
app.get('/download-cv', (req, res) => {
  const filePath = path.join(__dirname, 'assets', 'Advocate_CV.pdf'); // keep PDF inside assets folder
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('❌ Error serving CV:', err);
      res.status(500).send('Error opening CV.');
    }
  });
});
// =========================
// 📧 MAIL TRANSPORTER (shared)
// =========================
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'satyendramishra500@gmail.com',   // ⚠️ Advocate’s Gmail
    pass: 'wsed xuwr ywtv ongx'              // ⚠️ Gmail App Password, not login password
  }
});

// =========================
// 📧 CONTACT FORM ENDPOINT
// =========================
app.post('/send-email', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'satyendramishra500@gmail.com',
      subject: `New Contact Form Submission`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Contact email sent successfully' });
  } catch (err) {
    console.error('❌ Error sending contact email:', err);
    res.status(500).json({ success: false, message: 'Failed to send contact email' });
  }
});

// =========================
// 📅 BOOK APPOINTMENT ENDPOINT
// =========================
app.post('/book-appointment', async (req, res) => {
  const { name, address, phone, reason, email } = req.body;

  try {
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'satyendramishra500@gmail.com',
      subject: `📅 New Appointment Request`,
      text: `
        Name: ${name}
        Address: ${address}
        Phone: ${phone}
        Email: ${email}
        
        Reason for Appointment:
        ${reason}
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Appointment email sent successfully' });
  } catch (err) {
    console.error('❌ Error sending appointment email:', err);
    res.status(500).json({ success: false, message: 'Failed to send appointment email' });
  }
});

// =========================
// START SERVER
// =========================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
