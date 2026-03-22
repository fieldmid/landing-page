'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { ListIcon, XIcon } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import React from 'react'
import { cn } from '@/lib/utils'

const CORE_URL = process.env.NEXT_PUBLIC_CORE_URL!

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)

    const navLinkClassName = 'text-sm text-muted-foreground transition-colors hover:text-foreground'

    return (
        <header>
            <nav
                className="fixed left-0 top-0 z-20 w-full border-b border-border/50 bg-background/85 backdrop-blur-3xl">
                <div className="mx-auto max-w-5xl px-6 transition-all duration-300">
                    <div className="relative flex items-center justify-between py-3 lg:py-4">
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2">
                            <Logo />
                        </Link>

                        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center sm:flex">
                            <div className="flex items-center gap-4">
                                <Link href="/platform-guide" className={navLinkClassName}>
                                    Platform Guide
                                </Link>
                                <Link href="/cli" className={navLinkClassName}>
                                    CLI
                                </Link>
                                <Link href="/contact" className={navLinkClassName}>
                                    Contact
                                </Link>
                            </div>
                        </div>

                        <div className="hidden items-center gap-3 sm:flex">
                            <ThemeToggle />
                            <Button asChild size="lg">
                                <Link href={`${CORE_URL}/sign-up`}>
                                    <span>Get Started</span>
                                </Link>
                            </Button>
                        </div>

                        <div className="flex items-center gap-1 sm:hidden">
                            <ThemeToggle />
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 cursor-pointer p-2.5">
                                <ListIcon className={cn('size-6 duration-200', menuState && 'rotate-180 scale-0 opacity-0')} />
                                <XIcon className={cn('absolute inset-0 m-auto size-6 duration-200', !menuState && '-rotate-180 scale-0 opacity-0')} />
                            </button>
                        </div>

                        {menuState && (
                            <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-dashed bg-background p-3 shadow-lg sm:hidden">
                                <div className="flex flex-col gap-2">
                                    <Button asChild size="sm" variant="ghost" className="w-full justify-start">
                                        <Link href="/platform-guide" onClick={() => setMenuState(false)}>Platform Guide</Link>
                                    </Button>
                                    <Button asChild size="sm" variant="ghost" className="w-full justify-start">
                                        <Link href="/cli" onClick={() => setMenuState(false)}>CLI</Link>
                                    </Button>
                                    <Button asChild size="sm" variant="ghost" className="w-full justify-start">
                                        <Link href="/contact" onClick={() => setMenuState(false)}>Contact</Link>
                                    </Button>
                                    <hr className="border-dashed" />
                                    <Button asChild size="sm" className="w-full">
                                        <Link href={`${CORE_URL}/sign-up`} onClick={() => setMenuState(false)}>Get Started</Link>
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}
