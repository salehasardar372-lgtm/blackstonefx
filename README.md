# Black Stone FX — Trading Education Website

A professional trading education website for **Black Stone FX**, built with TanStack Start, React, Tailwind CSS v4, and deployed on Netlify.

## About

Black Stone FX is a trading education platform that teaches traders Technical Analysis, Fundamental Analysis, and Risk Management. The site features a dark gold luxury aesthetic matching the brand identity.

## Key Technologies

- **TanStack Start** — Full-stack React framework with file-based routing
- **React 19** — UI components
- **Tailwind CSS v4** — Utility-first styling
- **Vite** — Build tooling
- **Netlify** — Hosting and deployment

## Sections

1. **Hero** — Brand banner with CTA buttons and market ticker tape
2. **What You Will Learn** — Technical Analysis, Fundamental Analysis, Risk Management
3. **Free Trading Activities** — Weekly Webinars, Trading Competition, WhatsApp Community
4. **VIP Trading Group** — Exclusive premium access section
5. **About** — Brand story and stats
6. **Disclaimer** — Risk disclaimer
7. **Footer** — Social links (WhatsApp, Instagram, YouTube, Telegram)

## Running Locally

```bash
npm install
npm run dev
```

The dev server runs on [http://localhost:3000](http://localhost:3000).

## Customization

Update the social/WhatsApp links at the top of `src/routes/index.tsx`:

```ts
const WHATSAPP_COMMUNITY = 'https://chat.whatsapp.com/...'
const WHATSAPP_VIP = 'https://chat.whatsapp.com/...'
const INSTAGRAM = 'https://instagram.com/blackstonefx'
const YOUTUBE = 'https://youtube.com/@blackstonefx'
const TELEGRAM = 'https://t.me/blackstonefx'
```
