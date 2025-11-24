# Sending a Billing Failure Email with Attachment using Next.js & Resend

This is an example project showing how to send a **billing failure email** using [Resend](https://resend.com/).  
It includes a styled HTML email template, a PDF attachment, and links to this repo in the email footer.

---

## Step 1: Clone & Install

```bash
git clone [https://github.com/ctrlshiftjaq/resend-billing-email-template.git](https://github.com/ctrlshiftjaq/resend-billing-email-template.git)
cd resend-billing-email-template
npm install
```

---

## Step 2: Add Your Resend API Key

Create a file called `.env.local`:

```env
RESEND_API_KEY=your_resend_api_key_here
```
Get your key at [Resend Dashboard](https://resend.com/api-keys).

---

## Step 3: Start Next.js dev server

```bash
npm run dev
```

---

## Step 4: Trigger the API to send the example email

You can trigger the email send with:

```bash
curl --location --request POST 'http://localhost:3000/api/send-billing-failure'
```

The endpoint will send a sample billing failure email (with attachment) to a test recipient.

---

## How does it work?

- The API route (`/api/send-billing-failure`) sends a pre-filled, example billing failure email.
- The email HTML is built directly in the route handler.
- The email includes a PDF attachment and a link to this repo in the footer

---

## Example Output

> The recipient will receive an email like this:

- Subject: “Oops! Payment didn’t go through”
- Content: Tells them about the failed billing attempt.
- Includes a PDF invoice attachment.
- Footer: “Rejected Billing Team” and a link to this GitHub repo.


**Edit the `to` field in the API route if you want to send to your own email during testing!**

