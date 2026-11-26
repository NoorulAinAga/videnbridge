
const DEFAULT_CONTACT_TO = "sadaf.fatima@videnbridge.com";

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

    const contactTo =
      process.env.CONTACT_TO || DEFAULT_CONTACT_TO;

    // Prepare email content
    const emailContent = `
New VidenBridge Website Enquiry

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Service: ${service}

Message:
${message}
`;

    // Send email using GoDaddy Email Gateway
    const response = await fetch(
      "http://127.0.0.1:2525/api/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: [contactTo],
          subject: `New VidenBridge website enquiry — ${service}`,
          text: emailContent,
          replyTo: email,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      console.error("GoDaddy Email Gateway error:", result);
      throw new Error("Email delivery failed");
    }

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
