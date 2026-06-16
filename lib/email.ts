import nodemailer from "nodemailer";

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify transporter on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP connection error:", error);
  } else {
    console.log("SMTP server is ready to send emails");
  }
});

export async function sendContactEmail(data: EmailData) {
  const { name, email, phone, message } = data;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #667eea; }
          .value { margin-top: 5px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${phone}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${message}</div>
            </div>
          </div>
          <div class="footer">
            SAMARTHWAVE HOSPITALITY & SERVICES PVT LTD
          </div>
        </div>
      </body>
    </html>
  `;

  // Send email to business
  await transporter.sendMail({
    from: `"SAMARTHWAVE Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.BUSINESS_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    html: htmlContent,
    replyTo: email,
  });

  // Send auto-reply to customer
  await transporter.sendMail({
    from: `"SAMARTHWAVE HOSPITALITY" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Thank you for contacting SAMARTHWAVE",
    html: `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #667eea;">Thank you for your inquiry!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you shortly.</p>
          <p>Our team typically responds within 24 hours.</p>
          <br>
          <p>Best regards,</p>
          <p><strong>SAMARTHWAVE HOSPITALITY & SERVICES PVT LTD</strong></p>
          <p style="color: #666; font-size: 12px;">
            A/32, Plot No. 557, Jalkiran CHS, Charkop<br>
            Kandivali – West, Mumbai – 400067
          </p>
        </body>
      </html>
    `,
  });
}
