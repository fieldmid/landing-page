# FieldMid Landing Page

The public-facing marketing site for FieldMid — an offline-first field incident reporting platform built for teams operating in low-connectivity environments like mines, construction sites, and remote operations.

## Tech Stack

- **Next.js 16** with Turbopack and App Router
- **React 19** + **TypeScript 5.9**
- **Tailwind CSS 4** + **shadcn/ui** (Radix Mira style)
- **Motion** (formerly Framer Motion) — Staggered entrance animations, spring physics
- **Phosphor Icons** — Clean icon library
- **EmailJS** — Serverless contact form delivery
- **Zustand** + **next-themes** — Auth state and dark mode

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, features, how-it-works, testimonials |
| `/platform-guide` | Role-by-role playbooks (field worker, supervisor, admin) |
| `/cli` | CLI download and single-line install command |
| `/contact` | Contact form powered by EmailJS |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| `/credits` | Credits and acknowledgments |

## Key Sections

### Feature Showcase (4 Pillars)

1. **Offline-First AI** — Voice transcription, severity classification, auto-draft reports
2. **Reliable Sync** — SQLite to PostgreSQL via PowerSync with conflict resolution
3. **Cloud Follow-Up** — AI triage, auto-escalation, compliance audits via Mastra agents
4. **Supervisor View** — Live incident feed, push notifications, audit reports

### How It Works (4 Phases)

1. Offline incident recording with Whisper.rn transcription
2. Automatic sync via PowerSync when connection returns
3. Cloud AI review by Mastra agents
4. Supervisor dashboard for incident triage

## Setup

### 1. Environment Variables

Create `.env.local`:

```env
# Points signup CTAs to the core dashboard
NEXT_PUBLIC_CORE_URL=http://localhost:3000

# EmailJS (optional — contact form won't send without these)
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

### 2. Install & Run

```bash
npm install
npm run dev
```

Opens at [http://localhost:3001](http://localhost:3001) (port 3001 by default).

### 3. Available Scripts

```bash
npm run dev        # Start dev server with Turbopack on port 3001
npm run build      # Production build
npm start          # Start production server
npm run lint       # ESLint
npm run format     # Prettier
npm run typecheck  # TypeScript checking
```

## Design System

- **Color Scheme** — OKLch color space for perceptual uniformity
- **Typography** — Inter (UI), serif accent for "fieldmid" branding
- **Icons** — Phosphor Icons 2.1
- **Components** — shadcn/ui Radix Mira style with dashed border accents
- **Animations** — Spring physics with stagger effects via Motion
- **Theme** — Dark/light toggle with keyboard shortcut (press `D`)

## SEO

- Dynamic metadata in layout
- `robots.ts` and `sitemap.ts` for crawlers
- Open Graph tags for social sharing

## Related Repos

| Repo | Purpose |
|------|---------|
| [core-repo](../core-repo) | Web dashboard (signup CTAs link here) |
| [mobile-app-repo](../mobile-app-repo) | Expo/React Native field worker app |
| [supabase-repo](../supabase-repo) | Database, Edge Functions, PowerSync config |
| [mastra-agents-repo](../mastra-agents-repo) | AI agents for incident management |
| [rust-edge-repo](../rust-edge-repo) | Rust edge daemon for rugged devices |
