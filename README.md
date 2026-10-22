# VidenBridge website

A JavaScript Next.js App Router project with Tailwind CSS v4, reusable page components, centralized content data, and a server-side contact form that sends enquiries by email through SMTP.

## Folder structure

```text
videnbridge-website/
├── app/
│   ├── about/
│   │   └── page.js
│   ├── api/
│   │   └── contact/
│   │       └── route.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── about/
│   │   ├── AboutHero.js
│   │   ├── AboutOverview.js
│   │   └── AboutPrinciples.js
│   ├── contact/
│   │   └── ContactSection.js
│   ├── home/
│   │   ├── AudienceSection.js
│   │   ├── ApproachSection.js
│   │   ├── FinalCta.js
│   │   ├── HeroCarousel.js
│   │   ├── IntroSection.js
│   │   ├── ServicesSection.js
│   │   └── WhyVidenBridge.js
│   └── layout/
│       ├── Footer.js
│       └── Header.js
├── data/
│   └── site-content.js
├── lib/
│   └── content.js
├── .env.example
├── package.json
└── ...
```

## 1. Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000` and `http://localhost:3000/about`.

On Windows PowerShell, copy the environment file with:

```powershell
Copy-Item .env.example .env.local
```

## 2. Configure enquiry emails

The contact form submits to `POST /api/contact`. Email is sent server-side using Nodemailer and SMTP; SMTP credentials are never exposed to the browser.

Set these values in `.env.local`:

```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
CONTACT_TO=the-inbox-that-should-receive-enquiries@example.com
CONTACT_FROM=verified-sender@example.com
```

Use SMTP credentials from your company's mail provider or transactional email service. The `CONTACT_FROM` address should be verified/allowed by that provider. `CONTACT_TO` is the inbox that should receive website enquiries. Do not commit `.env.local` to Git.

Restart `npm run dev` after changing environment variables. The form shows an error if email configuration is missing; it does not pretend an enquiry was sent.

Before production, add provider-specific rate limiting and/or CAPTCHA to reduce spam. Deploy on a Node.js-compatible Next.js host that supports Route Handlers and environment variables.

## 3. Change website copy

Edit `data/site-content.js`. Navigation, hero carousel slides, services, About content, contact email, and section copy are centralized there. The page components render that data and should not need editing for routine copy changes.

## 4. Switch content to Strapi later

`lib/content.js` is the content adapter. For now:

```env
CONTENT_SOURCE=local
```

Later set `CONTENT_SOURCE=strapi`, configure `STRAPI_URL` and optionally `STRAPI_API_TOKEN`, then adjust the mapping in `lib/content.js` to match the actual Strapi content type. The example expects `GET /api/site-content?populate=deep`; this endpoint and schema must be created in your Strapi project. Keep the returned shape compatible with `data/site-content.js` to avoid changing page components.

Keep Strapi tokens server-side only. Do not prefix private tokens with `NEXT_PUBLIC_`.

## 5. Validate

```bash
npm run build
npm start
```

External Unsplash photos are used as temporary visual assets; replace with approved brand images when available. Email delivery requires real SMTP credentials and cannot work with the example placeholders.
