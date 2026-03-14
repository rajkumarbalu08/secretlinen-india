const { onRequest } = require("firebase-functions/v2/https");
const nodemailer = require("nodemailer");

// CORS headers helper
function setCorsHeaders(res) {
  res.set("Access-Control-Allow-Origin", "https://secretlinen-1.web.app");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
}

// Email transporter — uses environment config set via firebase functions:secrets
// You'll set these with:
//   firebase functions:secrets:set SMTP_EMAIL
//   firebase functions:secrets:set SMTP_PASSWORD
exports.sendEmail = onRequest(
  {
    region: "asia-south1",
    invoker: "public",
    cors: ["https://secretlinen-1.web.app", "https://secretlinen-1.firebaseapp.com"],
    secrets: ["SMTP_EMAIL", "SMTP_PASSWORD"],
  },
  async (req, res) => {
    // Only allow POST
    if (req.method !== "POST") {
      res.status(405).json({ success: false, message: "Method not allowed" });
      return;
    }

    try {
      const { name, email, phone, company, service, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        res.status(400).json({
          success: false,
          message: "Name, email and message are required",
        });
        return;
      }

      // Basic email format check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        res.status(400).json({
          success: false,
          message: "Invalid email address",
        });
        return;
      }

      // Create transporter using your Gmail
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      // Build email HTML
      const htmlBody = `
<div style="font-family: 'Georgia', serif; max-width: 680px; margin: 0 auto; background: #f8f3ed;">
  <div style="background: #7B1113; color: #f5f1e8; padding: 40px 30px; text-align: center; border-bottom: 8px solid #a8926e;">
    <div style="border: 1px solid rgba(245, 241, 232, 0.3); padding: 30px 20px;">
      <h2 style="margin: 0; font-size: 32px; font-weight: 400; letter-spacing: 3px; font-variant: small-caps;">Secret Linen</h2>
      <div style="width: 60px; height: 1px; background: #a8926e; margin: 15px auto;"></div>
    </div>
  </div>

  <div style="padding: 40px;">
    <div style="background: #fff; padding: 40px; border: 1px solid #e8e2d6; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
      <div style="text-align: center; margin-bottom: 40px;">
        <div style="font-size: 14px; color: #1a1a1a; margin-bottom: 10px; font-style: italic;">Dear Craftsman,</div>
        <div style="font-size: 18px; color: #333; font-style: italic;">A new textile inquiry awaits your expertise</div>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 35px;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0e6d8; width: 35%; color: #a8926e; font-size: 14px;">Client Name</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0e6d8; font-size: 16px; color: #333;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0e6d8; color: #a8926e; font-size: 14px;">Email Address</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0e6d8; font-size: 15px; color: #333;">${escapeHtml(email)}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0e6d8; color: #a8926e; font-size: 14px;">Telephone</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0e6d8; font-size: 15px; color: #333;">${escapeHtml(phone || "Not provided")}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0e6d8; color: #a8926e; font-size: 14px;">Establishment</td>
          <td style="padding: 12px 0; border-bottom: 1px solid #f0e6d8; font-size: 15px; color: #333;">${escapeHtml(company || "Private client")}</td>
        </tr>
        <tr>
          <td style="padding: 12px 0; color: #a8926e; font-size: 14px;">Service Required</td>
          <td style="padding: 12px 0; font-size: 15px; color: #333; font-weight: 500;">${escapeHtml(service || "Textile consultation")}</td>
        </tr>
      </table>

      <div style="border-left: 3px solid #a8926e; padding-left: 25px; margin: 35px 0;">
        <div style="font-size: 14px; color: #a8926e; margin-bottom: 15px; font-style: italic;">Their vision expressed:</div>
        <div style="font-size: 15px; color: #444; line-height: 1.7;">${escapeHtml(message).replace(/\n/g, "<br>")}</div>
      </div>

      <div style="text-align: center; margin-top: 40px;">
        <div style="font-size: 13px; color: #a8926e; font-style: italic;">We await your craftsmanship and guidance.</div>
      </div>
    </div>
  </div>

  <div style="background: #7B1113; color: #f5f1e8; padding: 25px 40px; text-align: center;">
    <div style="font-size: 12px; margin-bottom: 5px;">Received ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</div>
    <div style="font-size: 11px; opacity: 0.7;">SECRET LINEN &bull; ESTABLISHED 2024</div>
  </div>
</div>`;

      // Send email to client
      await transporter.sendMail({
        from: `"Secret Linen Website" <${process.env.SMTP_EMAIL}>`,
        to: "secretlinenindia@gmail.com",
        replyTo: email,
        subject: `New inquiry from Secret Linen: ${name}`,
        html: htmlBody,
      });

      res.status(200).json({
        success: true,
        message: "Form submitted successfully",
      });
    } catch (error) {
      console.error("Email send error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    }
  }
);

// Sanitize user input for HTML
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
