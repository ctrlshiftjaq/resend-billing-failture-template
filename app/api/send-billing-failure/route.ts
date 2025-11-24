import type { NextRequest } from 'next/server';
import { resend } from '../../../lib/resend';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const toParam = url.searchParams.get('to');
    const to = toParam ? [toParam] : ['jaquelineromero@protonmail.com'];

    const customerName = url.searchParams.get('customerName') || 'Ada Lovelace';
    const amount = url.searchParams.get('amount') || '$99.99';
    const failureReason = url.searchParams.get('failureReason') || 'Card declined';
    const subject = url.searchParams.get('subject') || "Oops! Payment didn't go through";

    const html = `
      <html>
        <body style="font-family:Arial, sans-serif;color:#242222ff">
          <div style="max-width:600px;margin:0 auto;padding:20px">
            <h1>Payment failed</h1>
            <p>Hi ${customerName},</p>
            <p>We tried to charge you ${amount} but the payment failed: ${failureReason}.</p>
            <p>The invoice for the failed payment is attached.</p>
            <p>Please update your payment information to continue enjoying our services.</p>
            <hr/>
            <p style="font-size:12px;color:#666">Acme Billing Team</p>
            <div style="text-align:center;margin-top:20px;">
              <p>View the project on <a href="https://github.com/ctrlshiftjaq/resend-billing-email-template">GitHub</a></p>
            </div>
          </div>
        </body>
      </html>
    `;

    const data = await resend.emails.send({
      from: 'Acme Billing Team <onboarding@resend.dev>',
      to,
      subject,
      html,
       attachments: [
        {
          path: 'https://raw.githubusercontent.com/ctrlshiftjaq/resend-billing-email-template/main/attachments/Billingfailure.pdf',
          filename: 'Billingfailure.pdf',
        },
      ],
    });

    return new Response(JSON.stringify({ data: (data as any).id }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    console.error('Send error:', err);
    return new Response(JSON.stringify({ error: 'Failed to send email', details: String(err) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
