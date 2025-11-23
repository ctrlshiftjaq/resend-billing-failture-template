// /app/api/send-billing-failure/route.js
import { Resend } from "resend";
import { footer } from '../../../emails/BillingFailureEmail.js';

// POST /api/send-billing-failure
export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  const resend = new Resend(apiKey);

  let body = {};
  try {
    body = await request.json();
  } catch (e) {}

  const customerName = body.customerName || "Ada Lovelace";
  const amount = body.amount || "$99.99";
  const failureReason = body.failureReason || "Card declined";

  try {
    const subject = body.subject || "Oops! Payment didn't go through";
    const html = `
      <html>
        <body style="font-family:Arial, sans-serif;color:#3498eb">
          <div style="max-width:600px;margin:0 auto;padding:20px">
            <h1>Payment failed</h1>
            <p>Hi ${customerName},</p>
            <p>We tried to charge you ${amount} but the payment failed: ${failureReason}.</p>
            <p>The invoice for the failed payment is attached.}</p>
            <p>Please update your payment information to continue enjoying our services.</p>
            <hr/>
            <p style="font-size:12px;color:#666">Acme Billing Team</p>
            ${footer}
          </div>
        </body>
      </html>
    `;

    const email = await resend.emails.send({
      from: "Acme Billing Team <onboarding@resend.dev>",
      to: body.to || "jaquelineromero@protonmail.com",
      subject,
      html,
      attachments: [
        {
          path: "https://raw.githubusercontent.com/ctrlshiftjaq/resend-billing-email-template/1fa37fa43fa91ca7305289931cb28e98f6a7e8c1/emails/Billingfailure.pdf",
          filename: body.attachmentFilename || "Billingfailure.pdf",
        },
      ],
    });

    return new Response(JSON.stringify({ id: email.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Send error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to send email", details: String(err) }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
