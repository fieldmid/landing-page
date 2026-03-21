"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowSquareOutIcon, HeartIcon } from '@phosphor-icons/react'
import { HeroHeader } from '@/components/header'
import FooterSection from '@/components/footer'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

const technologies = [
    {
        name: 'PowerSync',
        description: 'Offline-first sync engine that keeps SQLite in sync with Postgres. The core of our bidirectional data sync in the mobile app.',
        href: 'https://powersync.com',
        lightSrc: '/technology/powersync/powersync-dark.svg',
        darkSrc: '/technology/powersync/powersync-light.svg',
        width: 144,
        height: 32,
    },
    {
        name: 'Supabase',
        description: 'Open-source backend platform providing the Postgres database, authentication, and real-time capabilities.',
        href: 'https://supabase.com',
        lightSrc: '/technology/supabase/supabase-dark.svg',
        darkSrc: '/technology/supabase/supabase-light.svg',
        width: 148,
        height: 32,
    },
    {
        name: 'Mastra',
        description: 'TypeScript-native AI agent framework used to orchestrate cloud-side incident review, escalation, and shift summaries.',
        href: 'https://mastra.ai',
        lightSrc: '/technology/mastra/mastra-dark.svg',
        darkSrc: '/technology/mastra/mastra-light.svg',
        width: 132,
        height: 32,
    },
    {
        name: 'Expo',
        description: 'React Native framework powering the mobile field app for workers. Handles offline media capture and voice recording.',
        href: 'https://expo.dev',
        lightSrc: '/technology/expo/expo-dark.svg',
        darkSrc: '/technology/expo/expo-light.svg',
        width: 118,
        height: 32,
    },
    {
        name: 'Next.js',
        description: 'React framework used to build the supervisor web dashboard and this landing page.',
        href: 'https://nextjs.org',
        lightSrc: '/technology/nextjs/nextjs-light.svg',
        darkSrc: '/technology/nextjs/nextjs-dark.svg',
        width: 124,
        height: 32,
    },
    {
        name: 'shadcn/ui',
        description: 'Accessible, composable component library that forms the design system across the web dashboard and landing page.',
        href: 'https://ui.shadcn.com',
        lightSrc: '/technology/shadcn/shadcn-ui-dark.svg',
        darkSrc: '/technology/shadcn/shadcn-ui-light.svg',
        width: 144,
        height: 32,
    },
    {
        name: 'Rust',
        description: 'Systems language used to build the FieldMid CLI binary for edge operators working in low-connectivity environments.',
        href: 'https://rust-lang.org',
        lightSrc: '/technology/rust/rust-dark.svg',
        darkSrc: '/technology/rust/rust-light.svg',
        width: 118,
        height: 32,
    },
    {
        name: 'Resend',
        description: 'Transactional email platform used to deliver contact form messages and system notifications.',
        href: 'https://resend.com',
        lightSrc: '/technology/resend/resend-dark.svg',
        darkSrc: '/technology/resend/resend-light.svg',
        width: 132,
        height: 32,
    },
]

function TechLogoImage({ lightSrc, darkSrc, name, width, height }: {
    lightSrc: string
    darkSrc: string
    name: string
    width: number
    height: number
}) {
    const [loaded, setLoaded] = useState(false)
    return (
        <div className="relative flex h-7 items-center" style={{ width }}>
            {!loaded && <Skeleton className="absolute inset-0 h-7 rounded-sm" />}
            <Image
                src={lightSrc}
                alt={name}
                width={width}
                height={height}
                className={cn('h-7 w-auto object-contain dark:hidden transition-opacity duration-300', loaded ? 'opacity-100' : 'opacity-0')}
                onLoad={() => setLoaded(true)}
            />
            <Image
                src={darkSrc}
                alt={name}
                width={width}
                height={height}
                className={cn('hidden h-7 w-auto object-contain dark:block transition-opacity duration-300', loaded ? 'opacity-100' : 'opacity-0')}
                onLoad={() => setLoaded(true)}
            />
        </div>
    )
}

const VercelLogo = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 116 100"
        fill="currentColor"
        className={className}
        aria-label="Vercel">
        <path d="M57.5 0L115 100H0L57.5 0z" />
    </svg>
)

export default function CreditsPage() {
    return (
        <>
            <HeroHeader />
            <main className="bg-background pt-20">
                <section className="py-16 md:py-24">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mx-auto mb-14 max-w-2xl text-center">
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-dashed bg-muted/50 px-3 py-1 text-sm text-muted-foreground">
                                <HeartIcon weight="fill" className="size-4 text-primary" />
                                Open-source & proud
                            </span>
                            <h1 className="mt-4 text-balance text-3xl font-semibold md:text-4xl">Built on the shoulders of giants</h1>
                            <p className="mt-4 text-lg text-muted-foreground">
                                FieldMid would not exist without these exceptional tools and platforms. Huge thanks to every team behind them.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {technologies.map((tech) => (
                                <Link
                                    key={tech.name}
                                    href={tech.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex flex-col gap-4 rounded-none border border-dashed bg-card p-6 transition-colors duration-150 hover:border-primary/40 hover:bg-muted/30">
                                    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2" />
                                    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2" />
                                    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2" />
                                    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2" />

                                    <div className="flex items-start justify-between gap-2">
                                        <TechLogoImage
                                            lightSrc={tech.lightSrc}
                                            darkSrc={tech.darkSrc}
                                            name={tech.name}
                                            width={tech.width}
                                            height={tech.height}
                                        />
                                        <ArrowSquareOutIcon
                                            weight="bold"
                                            className="size-4 shrink-0 text-muted-foreground/40 transition-colors duration-150 group-hover:text-primary"
                                        />
                                    </div>

                                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                                </Link>
                            ))}

                            {/* Vercel — inline SVG logo since Phosphor has no Vercel icon */}
                            <Link
                                href="https://vercel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative flex flex-col gap-4 rounded-none border border-dashed bg-card p-6 transition-colors duration-150 hover:border-primary/40 hover:bg-muted/30">
                                <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2" />
                                <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2" />
                                <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2" />
                                <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2" />

                                <div className="flex items-start justify-between gap-2">
                                    <div className="flex h-8 items-center gap-2.5">
                                        <VercelLogo className="size-5 text-foreground" />
                                        <span className="text-lg font-semibold tracking-tight">Vercel</span>
                                    </div>
                                    <ArrowSquareOutIcon
                                        weight="bold"
                                        className="size-4 shrink-0 text-muted-foreground/40 transition-colors duration-150 group-hover:text-primary"
                                    />
                                </div>

                                <p className="text-sm text-muted-foreground">
                                    Hosting and deployment platform. The landing page and web dashboard are deployed and served via Vercel.
                                </p>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <FooterSection />
        </>
    )
}
