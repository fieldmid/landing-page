import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowsClockwise, ChartBar, Monitor, WifiSlash } from '@phosphor-icons/react/dist/ssr'

import FooterSection from '@/components/footer'
import { HeroHeader } from '@/components/header'
import { Button } from '@/components/ui/button'

const CORE_URL = process.env.NEXT_PUBLIC_CORE_URL!

type RolePlaybook = {
    role: 'Field Worker' | 'Supervisor' | 'Organization Admin'
    summary: string
    icon: React.ComponentType<{ className?: string; weight?: 'bold' }>
    entryPath: string
    steps: string[]
    checkpoints: string[]
}

const rolePlaybooks: RolePlaybook[] = [
    {
        role: 'Field Worker',
        summary: 'Capture incidents offline, sync safely, and keep your shift log complete.',
        icon: WifiSlash,
        entryPath: '/dashboard/worker',
        steps: [
            'Sign up and join your organization workspace after approval by your supervisor or admin.',
            'Use the mobile app in the field to capture incident notes, voice, and photos even without signal.',
            'Review incident history in the Worker Incidents view to confirm your entries are complete.',
            'Open Sync Status to verify pending uploads and last successful cloud sync.',
        ],
        checkpoints: ['Pending uploads should trend to zero', 'Critical incidents should appear in the supervisor queue'],
    },
    {
        role: 'Supervisor',
        summary: 'Run live operations by triaging incidents, escalations, and team access.',
        icon: Monitor,
        entryPath: '/dashboard/supervisor',
        steps: [
            'Start in Incident Feed to monitor new field incidents from assigned sites in realtime.',
            'Open Escalations to acknowledge urgent items and clear the unacknowledged queue.',
            'Review Reports for compliance snapshots and shift-level summaries.',
            'Process Join Requests so approved workers and leads can access the organization workspace.',
        ],
        checkpoints: ['Unacknowledged escalations should stay low', 'Assigned site feed should remain current'],
    },
    {
        role: 'Organization Admin',
        summary: 'Configure workspace structure, govern user roles, and keep operations compliant.',
        icon: ChartBar,
        entryPath: '/dashboard/admin',
        steps: [
            'Create your organization in onboarding and set the first primary site.',
            'Open Users to assign or adjust operational roles between Field Worker and Supervisor.',
            'Open Sites and maintain active locations where incidents can be created and tracked.',
            'Use Incidents and Rules views to oversee sync health, routing behavior, and compliance operations.',
        ],
        checkpoints: ['All active users have correct operational roles', 'Every active site has ownership and reporting visibility'],
    },
]

const sharedFlow = [
    {
        title: 'Step 1: Start with the right account mode',
        detail:
            'Individuals can sign up directly. Organization creators should use organization mode to unlock admin onboarding and team setup.',
    },
    {
        title: 'Step 2: Record operations in the field first',
        detail:
            'Workers submit incidents offline-first from mobile so reporting never stops in low-connectivity environments.',
    },
    {
        title: 'Step 3: Sync and escalation happen in the background',
        detail:
            'PowerSync reconciles device data with cloud state once connectivity returns and keeps supervisors informed.',
    },
    {
        title: 'Step 4: Supervisors triage and close loops',
        detail:
            'Supervisors acknowledge escalations, review reports, and handle join requests for smooth day-to-day operations.',
    },
    {
        title: 'Step 5: Admins govern the workspace',
        detail:
            'Admins manage users, sites, and policies to keep role access and compliance controls consistent across teams.',
    },
]

export const metadata: Metadata = {
    title: 'Platform Guide',
    description:
        'Step-by-step operational guide for FieldMid workers, supervisors, and organization admins across onboarding, incident capture, sync, and governance.',
    alternates: {
        canonical: '/platform-guide',
    },
}

export default function PlatformGuidePage() {
    return (
        <>
            <HeroHeader />
            <main className="bg-background pt-24">
                <section className="border-b border-dashed py-16 md:py-20">
                    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6">
                        <div className="max-w-3xl space-y-4">
                            <span className="inline-flex items-center gap-2 rounded-full border border-dashed bg-muted/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                <ArrowsClockwise className="size-4" weight="bold" />
                                Step-by-step platform walkthrough
                            </span>
                            <h1 className="text-balance text-4xl font-semibold md:text-5xl">How to use FieldMid across every role</h1>
                            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
                                This guide mirrors the real dashboard flow in your project so workers, supervisors, and admins know exactly what to do next.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <Button asChild size="lg">
                                <Link href={`${CORE_URL}/sign-up?mode=individual`}>Start as individual</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href={`${CORE_URL}/sign-up?mode=organization`}>Create organization workspace</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-8 max-w-2xl">
                            <h2 className="text-2xl font-semibold md:text-3xl">Shared rollout flow</h2>
                            <p className="mt-3 text-muted-foreground">
                                Use this sequence when introducing the platform to a new team.
                            </p>
                        </div>

                        <ol className="grid gap-4 md:grid-cols-2">
                            {sharedFlow.map((item) => (
                                <li key={item.title} className="rounded-none border border-dashed bg-card p-5">
                                    <h3 className="text-base font-semibold">{item.title}</h3>
                                    <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section className="border-y border-dashed bg-zinc-50 py-16 dark:bg-transparent md:py-20">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mb-8 max-w-2xl">
                            <h2 className="text-2xl font-semibold md:text-3xl">Role-by-role playbooks</h2>
                            <p className="mt-3 text-muted-foreground">
                                Each role has different responsibilities. Follow the checklist for your dashboard path.
                            </p>
                        </div>

                        <div className="grid gap-4 lg:grid-cols-3">
                            {rolePlaybooks.map((playbook) => {
                                const Icon = playbook.icon
                                return (
                                    <article key={playbook.role} className="rounded-none border border-dashed bg-card p-6">
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Icon className="size-4" weight="bold" />
                                            <span className="text-xs font-semibold uppercase tracking-wider">{playbook.role}</span>
                                        </div>

                                        <p className="mt-3 text-sm text-muted-foreground">{playbook.summary}</p>

                                        <ol className="mt-4 space-y-2 text-sm text-foreground">
                                            {playbook.steps.map((step) => (
                                                <li key={step} className="rounded-md border border-dashed bg-muted/40 px-3 py-2">
                                                    {step}
                                                </li>
                                            ))}
                                        </ol>

                                        <div className="mt-4 space-y-2">
                                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                                Operational checkpoints
                                            </p>
                                            <ul className="space-y-1 text-xs text-muted-foreground">
                                                {playbook.checkpoints.map((checkpoint) => (
                                                    <li key={checkpoint}>• {checkpoint}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <Button asChild variant="outline" className="mt-5 w-full">
                                            <Link href={`${CORE_URL}${playbook.entryPath}`}>Open {playbook.role} dashboard</Link>
                                        </Button>
                                    </article>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="rounded-none border border-dashed bg-card p-8 text-center">
                            <h2 className="text-2xl font-semibold md:text-3xl">Need help onboarding your team?</h2>
                            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                                Use this page as your operating checklist during rollout, then track adoption through the role dashboards.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                                <Button asChild>
                                    <Link href="/contact">Talk to us</Link>
                                </Button>
                                <Button asChild variant="outline">
                                    <Link href="/">Back to landing page</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <FooterSection />
            </main>
        </>
    )
}