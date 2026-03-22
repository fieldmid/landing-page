import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowsClockwise,
    Database,
    GitBranch,
    Lightning,
    WifiSlash,
    Brain,
    Tree,
    Gear,
    Terminal,
    ShieldCheck,
} from '@phosphor-icons/react/dist/ssr'

import FooterSection from '@/components/footer'
import { HeroHeader } from '@/components/header'
import { FieldMidText } from '@/components/fieldmid-text'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type TechIntegration = {
    name: string
    logoDark: string
    logoLight: string
    role: string
    details: string[]
    highlight?: string
}

const techIntegrations: TechIntegration[] = [
    {
        name: 'PowerSync',
        logoDark: '/technology/powersync/powersync-dark.svg',
        logoLight: '/technology/powersync/powersync-light.svg',
        role: 'Sync engine that bridges SQLite on every client with PostgreSQL in the cloud.',
        details: [
            '9 Sync Streams scoped by role — workers see their own incidents, supervisors see their site, admins see everything, and edge devices receive a parameterized critical feed.',
            'Mobile app writes incidents to local OP-SQLite; PowerSync reconciles them with Supabase Postgres when connectivity returns.',
            'Rust edge daemon uses the PowerSync Rust SDK (pre-alpha) to sync a read-only SQLite on rugged Linux devices with a TUI dashboard.',
            'The web dashboard can subscribe to PowerSync for optional real-time reads alongside Supabase Realtime.',
        ],
        highlight: 'Core requirement',
    },
    {
        name: 'Supabase',
        logoDark: '/technology/supabase/supabase-dark.svg',
        logoLight: '/technology/supabase/supabase-light.svg',
        role: 'PostgreSQL backend with Auth, Edge Functions, Realtime subscriptions, and Row Level Security.',
        details: [
            '10 SQL migrations define the full schema: organizations, sites, workers, incidents, escalations, compliance rules, audit reports, notifications, push tokens, and CLI auth sessions.',
            '5 Edge Functions handle signup gating, admin role management, PowerSync write ingestion (with Mastra triage), push notifications, and CLI browser-based auth.',
            'Supabase Auth manages email/password and OAuth (Google, GitHub) across web and mobile.',
            'Row Level Security enforces per-org, per-role data isolation throughout.',
        ],
        highlight: 'Best Submission Using Supabase',
    },
    {
        name: 'Mastra',
        logoDark: '/technology/mastra/mastra-dark.svg',
        logoLight: '/technology/mastra/mastra-light.svg',
        role: 'AI agent framework powering incident triage, escalation workflows, compliance audits, and shift summaries.',
        details: [
            'Triage Agent classifies incidents by severity (LOW through CRITICAL) with risk scoring, critical keyword detection, and tag extraction.',
            'Escalation Workflow is a two-step orchestration: prepare an escalation message, then conditionally dispatch to supervisors via email, Slack, or push.',
            'Compliance Agent audits incidents against organization rules and generates flagged-pattern reports.',
            'Summary Agent produces end-of-shift reports with incident counts, resolution rates, and management-ready narratives.',
        ],
        highlight: 'Best Submission Using Mastra',
    },
]

type Principle = {
    icon: React.ComponentType<{ className?: string; weight?: 'bold' }>
    title: string
    description: string
}

const localFirstPrinciples: Principle[] = [
    {
        icon: WifiSlash,
        title: 'Offline by default',
        description:
            'The mobile app writes every incident to local SQLite via OP-SQLite before anything touches the network. Workers can report voice notes, photos, and checklists with zero signal.',
    },
    {
        icon: Database,
        title: 'Local database as source of truth',
        description:
            'PowerSync keeps a full SQLite replica on every device. Queries, reads, and UI rendering all operate on local data — no spinners waiting on the cloud.',
    },
    {
        icon: ArrowsClockwise,
        title: 'Opportunistic sync',
        description:
            'When connectivity returns, PowerSync automatically reconciles local changes with Supabase Postgres. Conflict resolution is handled in the background without user intervention.',
    },
    {
        icon: Lightning,
        title: 'Instant local reads',
        description:
            'The Rust edge daemon, mobile app, and optional web reads all query SQLite directly. Latency is measured in microseconds, not network round-trips.',
    },
    {
        icon: ShieldCheck,
        title: 'Resilient operations',
        description:
            'Even when cloud services are unreachable, workers keep reporting, the edge daemon keeps monitoring, and queued actions sync when the connection stabilizes.',
    },
    {
        icon: Tree,
        title: 'Decentralized agents',
        description:
            'Cloud-side Mastra agents process incidents after sync. The system doesn\'t depend on real-time AI access — it catches up asynchronously when data arrives.',
    },
]

type Stream = {
    name: string
    audience: string
    description: string
}

const syncStreams: Stream[] = [
    { name: 'worker_self', audience: 'Field workers', description: 'Own incidents only' },
    { name: 'worker_sync_log', audience: 'Field workers', description: 'Personal sync status and queue depth' },
    { name: 'worker_site', audience: 'Field workers', description: 'Assigned site metadata' },
    { name: 'supervisor_site', audience: 'Supervisors', description: 'All incidents and escalations for supervised sites' },
    { name: 'admin_overview', audience: 'Admins', description: '30-day incident feed across the entire organization' },
    { name: 'edge_critical_feed', audience: 'Edge devices', description: 'Critical incidents parameterized by site_id (used by Rust daemon)' },
    { name: 'user_profile_self', audience: 'All users', description: 'Current user profile, role, and membership' },
    { name: 'user_join_requests', audience: 'All users', description: 'Organization membership requests' },
    { name: 'user_notifications', audience: 'All users', description: 'In-app and push notification payloads' },
]

type RepoEntry = {
    name: string
    tech: string
    description: string
    visibility: 'public' | 'private'
}

const repos: RepoEntry[] = [
    { name: 'mobile-app-repo', tech: 'Expo + React Native + PowerSync + OP-SQLite', description: 'Offline-first field incident reporting with voice, photo, and checklist capture', visibility: 'private' },
    { name: 'core-repo', tech: 'Next.js 16 + Supabase Realtime + Mastra client', description: 'Role-based web dashboard for admins, supervisors, and workers', visibility: 'private' },
    { name: 'supabase-repo', tech: 'PostgreSQL + Edge Functions + PowerSync config', description: 'Database schema, 5 Edge Functions, 9 Sync Stream definitions', visibility: 'private' },
    { name: 'mastra-agents-repo', tech: 'Mastra + Cerebras (llama3.1-8b)', description: '4 AI agents and an escalation workflow for triage, compliance, and summaries', visibility: 'private' },
    { name: 'rust-edge-repo', tech: 'Rust + PowerSync Rust SDK + ratatui', description: 'Read-only edge daemon with TUI for rugged Linux devices', visibility: 'private' },
    { name: 'landing-page-repo', tech: 'Next.js 16 + shadcn/ui + Motion', description: 'Marketing site, platform guide, and this architecture page', visibility: 'public' },
]

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
    title: 'Architecture',
    description:
        'How FieldMid uses PowerSync, Supabase, Mastra, and the Rust SDK to build an offline-first, AI-powered field incident platform.',
    alternates: {
        canonical: '/architecture',
    },
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ArchitecturePage() {
    return (
        <>
            <HeroHeader />
            <main className="bg-background pt-24">
                {/* Hero */}
                <section className="border-b border-dashed py-16 md:py-20">
                    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6">
                        <div className="max-w-3xl space-y-4">
                            <span className="inline-flex items-center gap-2 rounded-full border border-dashed bg-muted/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                <Gear className="size-4" weight="bold" />
                                System Architecture
                            </span>
                            <h1 className="text-balance text-4xl font-semibold md:text-5xl">
                                How <FieldMidText className="text-4xl md:text-5xl" /> is built
                            </h1>
                            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                                A six-repo platform that combines PowerSync, Supabase, Mastra, and the PowerSync Rust SDK into an offline-first, AI-powered field incident management system.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Architecture overview diagram */}
                <section className="py-16 md:py-20">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-8 max-w-2xl">
                            <h2 className="text-2xl font-semibold md:text-3xl">Data flow</h2>
                            <p className="mt-3 text-muted-foreground">
                                Incidents flow from the field to the cloud and back through four layers.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-4">
                            {[
                                {
                                    icon: Terminal,
                                    label: 'Capture',
                                    items: ['Mobile app (Expo)', 'Voice + photo + text', 'OP-SQLite local DB'],
                                },
                                {
                                    icon: ArrowsClockwise,
                                    label: 'Sync',
                                    items: ['PowerSync engine', '9 Sync Streams', 'SQLite <-> Postgres'],
                                },
                                {
                                    icon: Brain,
                                    label: 'AI Review',
                                    items: ['Mastra agents', 'Triage + escalation', 'Compliance + summaries'],
                                },
                                {
                                    icon: GitBranch,
                                    label: 'Monitor',
                                    items: ['Web dashboard', 'Rust edge TUI', 'Realtime + push'],
                                },
                            ].map((col) => {
                                const Icon = col.icon
                                return (
                                    <div key={col.label} className="relative rounded-none border border-dashed bg-card p-5">
                                        <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2" />
                                        <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2" />
                                        <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2" />
                                        <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2" />

                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Icon className="size-4" weight="bold" />
                                            <span className="text-xs font-semibold uppercase tracking-wider">{col.label}</span>
                                        </div>
                                        <ul className="mt-3 space-y-1.5">
                                            {col.items.map((item) => (
                                                <li key={item} className="text-sm text-muted-foreground">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Technology integrations */}
                <section className="border-y border-dashed bg-zinc-50 py-16 dark:bg-transparent md:py-20">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-8 max-w-2xl">
                            <h2 className="text-2xl font-semibold md:text-3xl">Technology integrations</h2>
                            <p className="mt-3 text-muted-foreground">
                                Each partner technology plays a distinct, meaningful role in the platform.
                            </p>
                        </div>

                        <div className="grid gap-4 lg:grid-cols-2">
                            {techIntegrations.map((tech) => (
                                <article key={tech.name} className="relative rounded-none border border-dashed bg-card p-6">
                                    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2" />
                                    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2" />
                                    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2" />
                                    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2" />

                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={tech.logoDark}
                                            alt={tech.name}
                                            width={24}
                                            height={24}
                                            className="hidden size-6 dark:block"
                                        />
                                        <Image
                                            src={tech.logoLight}
                                            alt={tech.name}
                                            width={24}
                                            height={24}
                                            className="size-6 dark:hidden"
                                        />
                                        <h3 className="text-lg font-semibold">{tech.name}</h3>
                                        {tech.highlight && (
                                            <span className="ml-auto rounded-full border border-dashed bg-muted/50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                                                {tech.highlight}
                                            </span>
                                        )}
                                    </div>
                                    <p className="mt-3 text-sm text-muted-foreground">{tech.role}</p>
                                    <ul className="mt-4 space-y-2">
                                        {tech.details.map((detail, i) => (
                                            <li key={i} className="rounded-md border border-dashed bg-muted/40 px-3 py-2 text-sm text-foreground">
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Local-first principles */}
                <section className="py-16 md:py-20">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-8 max-w-2xl">
                            <h2 className="text-2xl font-semibold md:text-3xl">Local-first principles</h2>
                            <p className="mt-3 text-muted-foreground">
                                FieldMid is designed around the idea that the network is a luxury, not a requirement.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {localFirstPrinciples.map((principle) => {
                                const Icon = principle.icon
                                return (
                                    <div key={principle.title} className="rounded-none border border-dashed bg-card p-5">
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Icon className="size-4" weight="bold" />
                                            <span className="text-sm font-semibold">{principle.title}</span>
                                        </div>
                                        <p className="mt-2 text-sm text-muted-foreground">{principle.description}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Sync Streams */}
                <section className="border-y border-dashed bg-zinc-50 py-16 dark:bg-transparent md:py-20">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-8 max-w-2xl">
                            <h2 className="text-2xl font-semibold md:text-3xl">Sync Streams</h2>
                            <p className="mt-3 text-muted-foreground">
                                PowerSync Sync Streams scope what data each client receives. FieldMid defines 9 streams that filter data by user role and device type.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="border-b border-dashed text-left">
                                        <th className="pb-3 pr-6 font-semibold">Stream</th>
                                        <th className="pb-3 pr-6 font-semibold">Audience</th>
                                        <th className="pb-3 font-semibold">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {syncStreams.map((stream) => (
                                        <tr key={stream.name} className="border-b border-dashed last:border-0">
                                            <td className="py-3 pr-6">
                                                <code className="rounded-md border border-dashed bg-muted/50 px-2 py-0.5 text-xs font-medium">
                                                    {stream.name}
                                                </code>
                                            </td>
                                            <td className="py-3 pr-6 text-muted-foreground">{stream.audience}</td>
                                            <td className="py-3 text-muted-foreground">{stream.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Repositories */}
                <section className="py-16 md:py-20">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-8 max-w-2xl">
                            <h2 className="text-2xl font-semibold md:text-3xl">Repositories</h2>
                            <p className="mt-3 text-muted-foreground">
                                FieldMid is split across six repositories, each with a focused responsibility.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {repos.map((repo) => (
                                <div key={repo.name} className="relative rounded-none border border-dashed bg-card p-5">
                                    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2" />
                                    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2" />
                                    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2" />
                                    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2" />

                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold">{repo.name}</h3>
                                        <span className="rounded-full border border-dashed bg-muted/50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                                            {repo.visibility}
                                        </span>
                                    </div>
                                    <p className="mt-1 text-xs text-muted-foreground">{repo.tech}</p>
                                    <p className="mt-3 text-sm text-muted-foreground">{repo.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 md:py-20">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="rounded-none border border-dashed bg-card p-8 text-center">
                            <h2 className="text-2xl font-semibold md:text-3xl">Try the platform</h2>
                            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                                Sign up as a field worker or create an organization workspace to see the full flow — from offline incident capture to AI-powered supervisor dashboards.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                                <Link
                                    href={`${process.env.NEXT_PUBLIC_CORE_URL}/sign-up`}
                                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                                    Get Started
                                </Link>
                                <Link
                                    href="/platform-guide"
                                    className="inline-flex items-center justify-center rounded-md border border-dashed px-6 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground">
                                    Platform Guide
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <FooterSection />
            </main>
        </>
    )
}
