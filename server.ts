import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cors from "cors";
import nodemailer from "nodemailer";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(cors());

  // API Routes
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const emailUser = process.env.EMAIL_USER;
      const emailPass = process.env.EMAIL_APP_PASSWORD;
      const destinationEmail = process.env.DESTINATION_EMAIL || emailUser;

      if (!emailUser || !emailPass) {
        console.error("Email configuration is missing. Cannot send notification.");
        // Still return success to client if we're just falling back to firestore or ignoring email,
        // but here the user explicitly wants email notification
        return res.status(500).json({ error: "Server email configuration is missing" });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      const mailOptions = {
        from: `"${name}" <${emailUser}>`, // Use authenticated user as sender to avoid DMARC failures
        replyTo: email,
        to: destinationEmail,
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message.replace(/\n/g, '<br>')}</p>`,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Provide a fallback for routing in SPA
    // Use *all for express v5
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
