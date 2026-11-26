
const CONTACT_TO = "sadaf.fatima@videnbridge.com";

export async function POST(request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !service || !message) {
      return Response.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const emailContent = `
New VidenBridge Website Enquiry

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Service: ${service}

Message:
${message}
`;

    const response = await fetch(
      "http://127.0.0.1:2525/api/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: [CONTACT_TO],
          subject: `New Website Enquiry - ${service}`,
          text: emailContent,
          replyTo: email,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      console.error("Email gateway error:", result);
      throw new Error("Email delivery failed");
    }

    return Response.json({
      message: "Thank you. Your enquiry has been sent successfully.",
    });

  } catch (error) {
    console.error("Contact form submission failed:", error);

    return Response.json(
      { message: "We could not send your enquiry. Please try again shortly." },
      { status: 500 }
    );
  }
}
