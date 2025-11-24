import type { NextApiRequest, NextApiResponse } from 'next';
import { resend } from '../../lib/resend';

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET': {
      try {
        const data = await resend.emails.send({
          from: 'Acme <onboarding@resend.dev>',
          to: (req.query.to ? [String(req.query.to)] : ['delivered@resend.dev']),
          subject: 'Receipt for your payment',
          html: `<p>Thanks for the payment</p>`,
          attachments: [
            {
              path: 'https://resend.com/static/sample/invoice.pdf',
              filename: 'sample-invoice.pdf',
            },
          ],
        });

        return res.status(200).send({ data: (data as any).id });
      } catch (err) {
        console.error('Send error:', err);
        return res.status(500).send({ error: 'Failed to send email', details: String(err) });
      }
    }
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default send;
