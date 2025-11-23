import React from 'react';

export function BillingFailureEmail({ customerName = 'Customer', amount = '$0.00', failureReason = 'Unknown', attachmentFilename = 'invoice.pdf' }) {
  return React.createElement('html', null,
    React.createElement('body', { style: { fontFamily: 'Arial, sans-serif', color: '#242222ff' } },
      React.createElement('div', { style: { maxWidth: 600, margin: '0 auto', padding: 20 } },
        React.createElement('h1', null, 'Payment failed'),
        React.createElement('p', null, `Hi ${customerName},`),
        React.createElement('p', null, `We tried to charge you ${amount} but the payment failed: ${failureReason}.`),
        React.createElement('p', null, `The invoice for the failed payment is attached.`),
        React.createElement('p', null, `Please update your payment information to continue enjoying our services.`),
        React.createElement('hr', null),
        React.createElement('p', { style: { fontSize: 12, color: '#666' } }, 'Acme Billing Team')
      )
    )
  );
}

export const footer = `
  <div style="text-align:center;margin-top:20px;">
    <table style="margin:0 auto;width:100%;max-width:600px;">
      <tr>
        <td align="center">
          <a href="https://github.com/ctrlshiftjaq/resend-billing-email-template.git" style="text-decoration:none;">
            <table style="margin:0 auto;">
              <tr>
                <td style="vertical-align:middle;padding-right:8px;">
                  <img alt="GitHub" height="24" width="24" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%232563eb'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E" />
                </td>
                <td style="vertical-align:middle;">
                  <span style="display:block;margin:8px 0;font-weight:600;font-size:16px;color:#2563eb;line-height:24px;">GitHub Repository</span>
                </td>
              </tr>
            </table>
          </a>
        </td>
      </tr>
    </table>
  </div>
`;
