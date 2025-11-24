# Billing Failure Email Example

This is an example of sending billing failure emails using Next.js, React Email, and Resend.

## What it does

This project example sends an email when for when a payment fails. The email includes:
- Customer's name and failed payment amount
- Reason why the payment failed
- A PDF invoice attachment
- Design built with React Email

## How to set it up

### Step 1: Clone this repo

```bash
git clone https://github.com/ctrlshiftjaq/resend-billing-failure-template.git
cd resend-billing-failure-template
npm install
```

### Step 2: Get a free Resend API key

1. Go to [resend.com](https://resend.com)
2. Create an API key from your dashboard
3. Create a file called `.env.local` in your project folder
4. Add your API key:

```
RESEND_API_KEY=re_your_api_key_here
```

### Step 3: Start the app

```bash
npm run dev
```

Your app will be running at `http://localhost:3000`

### Step 4: Send a test email

Just visit this URL in your browser:
```
http://localhost:3000/api/send-billing-failure
```

Or use this command:
```bash
curl http://localhost:3000/api/send-billing-failure
```

## How it works

1. **Email Template** (`emails/BillingFailureEmail.tsx`) - This is where the email design lives. It's written in React!
2. **API Route** (`app/api/send-billing-failure/route.ts`) - This sends the email when you visit the URL
3. **Resend Client** (`lib/resend.ts`) - Connects to Resend to actually send the email


## How it looks like


<img width="638" height="322" alt="image" src="https://github.com/user-attachments/assets/5f1b3739-b407-4fa5-a585-375bdc338baa" />

