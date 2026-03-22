"use client"
import Link from 'next/link'
import type { Variants } from 'motion/react'
import { Button } from '@/components/ui/button'
import { FieldMidText } from '@/components/fieldmid-text'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import TechnologyCloud from './technology-cloud'
import { WifiSlashIcon } from '@phosphor-icons/react'

const CORE_URL = process.env.NEXT_PUBLIC_CORE_URL!

const transitionVariants: { item: Variants } = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="relative overflow-x-hidden">
                <section className="flex min-h-svh flex-col">
                    <div className="relative flex flex-1 flex-col pt-24">
                        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6">
                            <div className="text-center sm:mx-auto lg:mx-auto lg:mt-0">
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.1,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mb-3 flex items-center justify-center">
                                    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-dashed bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground sm:px-3 sm:text-sm">
                                        <WifiSlashIcon weight="bold" className="size-3.5 sm:size-4" />
                                        Works fully offline. Still useful when the signal drops.
                                    </span>
                                </AnimatedGroup>

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-medium md:mt-7 md:text-5xl lg:text-6xl">
                                    Field reporting that still works when the internet doesn&apos;t
                                </TextEffect>
                                <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
                                    <FieldMidText className="text-lg" /> helps crews record incidents by voice, get a quick on-device triage, and sync everything once they are back online. It is built for places where coverage comes and goes.
                                </p>
                                <p className="mt-3 mx-auto max-w-2xl text-pretty text-sm text-muted-foreground">
                                    Start as an individual operator or create an organization workspace where the creator becomes the first admin and can assign supervisors later.
                                </p>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-7 flex flex-col items-center justify-center gap-2 sm:flex-row md:mt-8">
                                    <div key={1}>
                                        <Button
                                            asChild
                                            size="lg"
                                            className="px-5 text-base">
                                            <Link href={`${CORE_URL}/sign-up?mode=individual`}>
                                                <span>Get Started as Individual</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="px-5 text-base">
                                        <Link href={`${CORE_URL}/sign-up?mode=organization`}>
                                            <span>Create Organization Workspace</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={3}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base">
                                        <Link href="/platform-guide">
                                            <span>View Role Guide</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <div className="mt-auto pb-4 md:pb-6">
                            <TechnologyCloud />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
