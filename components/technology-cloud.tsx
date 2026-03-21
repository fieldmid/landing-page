'use client'
import Image from 'next/image'
import { useState } from 'react'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

const technologyLogos = [
    {
        name: 'PowerSync',
        lightSrc: '/technology/powersync/powersync-dark.svg',
        darkSrc: '/technology/powersync/powersync-light.svg',
        width: 144,
        height: 32,
    },
    {
        name: 'Supabase',
        lightSrc: '/technology/supabase/supabase-dark.svg',
        darkSrc: '/technology/supabase/supabase-light.svg',
        width: 148,
        height: 32,
    },
    {
        name: 'Mastra',
        lightSrc: '/technology/mastra/mastra-dark.svg',
        darkSrc: '/technology/mastra/mastra-light.svg',
        width: 132,
        height: 32,
    },
    {
        name: 'Expo',
        lightSrc: '/technology/expo/expo-dark.svg',
        darkSrc: '/technology/expo/expo-light.svg',
        width: 118,
        height: 32,
    },
    {
        name: 'Rust',
        lightSrc: '/technology/rust/rust-dark.svg',
        darkSrc: '/technology/rust/rust-light.svg',
        width: 118,
        height: 32,
    },
    {
        name: 'Next.js',
        lightSrc: '/technology/nextjs/nextjs-light.svg',
        darkSrc: '/technology/nextjs/nextjs-dark.svg',
        width: 124,
        height: 32,
    },
    {
        name: 'shadcn/ui',
        lightSrc: '/technology/shadcn/shadcn-ui-dark.svg',
        darkSrc: '/technology/shadcn/shadcn-ui-light.svg',
        width: 144,
        height: 32,
    },
    {
        name: 'resend',
        lightSrc: '/technology/resend/resend-dark.svg',
        darkSrc: '/technology/resend/resend-light.svg',
        width: 132,
        height: 32,
    }
]

export default function TechnologyCloud() {
    return (
        <section id="tech-stack" className="overflow-hidden bg-transparent py-2 md:py-3">
            <div className="group relative w-full">
                <div className="mx-auto max-w-5xl px-6">
                    <p className="text-center text-sm font-medium text-muted-foreground">
                        Built with tools teams already trust
                    </p>
                </div>

                <div className="relative left-1/2 mt-4 w-screen -translate-x-1/2 py-4">
                    <InfiniteSlider
                        speedOnHover={20}
                        speed={40}
                        gap={60}>
                        {technologyLogos.map((logo) => (
                            <TechnologyLogo key={logo.name} {...logo} />
                        ))}
                    </InfiniteSlider>

                    <div
                        aria-hidden
                        className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"
                    />
                    <div
                        aria-hidden
                        className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"
                    />
                    <ProgressiveBlur
                        className="pointer-events-none absolute left-0 top-0 h-full w-20"
                        direction="left"
                        blurIntensity={1}
                    />
                    <ProgressiveBlur
                        className="pointer-events-none absolute right-0 top-0 h-full w-20"
                        direction="right"
                        blurIntensity={1}
                    />
                </div>
            </div>
        </section>
    )
}

type TechnologyLogoProps = {
    name: string
    src?: string
    lightSrc?: string
    darkSrc?: string
    width: number
    height: number
}

function TechnologyLogo({ name, src, lightSrc, darkSrc, width, height }: TechnologyLogoProps) {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className="relative flex shrink-0 items-center" style={{ width, height: 32 }}>
            {!loaded && (
                <Skeleton className="absolute inset-0 h-8 rounded-sm" />
            )}
            {src ? (
                <Image
                    src={src}
                    alt={name}
                    width={width}
                    height={height}
                    className={cn(
                        'h-8 w-auto object-contain transition-opacity duration-300',
                        loaded ? 'opacity-100' : 'opacity-0'
                    )}
                    onLoad={() => setLoaded(true)}
                />
            ) : (
                <>
                    <Image
                        src={lightSrc!}
                        alt={name}
                        width={width}
                        height={height}
                        className={cn(
                            'h-8 w-auto object-contain dark:hidden transition-opacity duration-300',
                            loaded ? 'opacity-100' : 'opacity-0'
                        )}
                        onLoad={() => setLoaded(true)}
                    />
                    <Image
                        src={darkSrc!}
                        alt={name}
                        width={width}
                        height={height}
                        className={cn(
                            'hidden h-8 w-auto object-contain dark:block transition-opacity duration-300',
                            loaded ? 'opacity-100' : 'opacity-0'
                        )}
                        onLoad={() => setLoaded(true)}
                    />
                </>
            )}
        </div>
    )
}
