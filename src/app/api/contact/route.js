
import nodemailer from "nodemailer";

const CONTACT_TO = "sadaf.fatima@videnbridge.com";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    // Validate required fields
    if (!name || !email || !service || !message) {
      return Response.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailPattern.test(email)) {
      return Response.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (
      name.length > 120 ||
      email.length > 254 ||
      company.length > 200 ||
      service.length > 200 ||
      message.length > 5000
    ) {
      return Response.json(
        { message: "One or more fields are too long." },
        { status: 400 }
      );
    }

    // Check required SMTP configuration
    const requiredEnv = [
      "SMTP_HOST",
      "SMTP_USER",
      "SMTP_PASS",
      "CONTACT_FROM",
    ];

    const missing = requiredEnv.filter(
      (key) => !process.env[key]
    );

    if (missing.length > 0) {
      console.error(
        "Contact form email configuration missing:",
        missing.join(", ")
      );

      return Response.json(
        {
          message:
            "The enquiry service is not configured yet. Please try again later.",
        },
        { status: 503 }
      );
    }

    const port = Number(process.env.SMTP_PORT || 587);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure:
        process.env.SMTP_SECURE === "true" || port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send enquiry email
    await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: {
        name,
        address: email,
      },
      subject: `New VidenBridge website enquiry — ${service}`,
      text: [
        "New enquiry received from the VidenBridge website.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Service: ${service}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New VidenBridge website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return Response.json(
      {
        message:
          "Thank you. Your enquiry has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return Response.json(
      {
        message:
          "We could not send your enquiry. Please try again shortly.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}