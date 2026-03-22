import type { Metadata } from 'next'
import { PlayCircle } from '@phosphor-icons/react/dist/ssr'

import { HeroHeader } from '../../components/header'
import FooterSection from '../../components/footer'

type DemoVideo = {
  title: string
  description: string
  sources: string[]
}

const demoVideos: DemoVideo[] = [
  {
    title: 'Platform Demo',
    description: 'Full platform walkthrough for onboarding, dashboard flow, and operations visibility.',
    sources: ['/platform.mp4'],
  },
  {
    title: 'CLI Demo',
    description: 'Command-line setup and usage flow for your field tooling and local automation.',
    sources: ['/cli.mp4'],
  },
  {
    title: 'Mobile Demo',
    description: 'Mobile incident capture and offline-first sync behavior in the field app.',
    sources: ['/mobile.mp4', '/mobile,mp4'],
  },
]

export const metadata: Metadata = {
  title: 'Demo',
  description: 'Watch FieldMid platform, CLI, and mobile demos.',
  alternates: {
    canonical: '/demo',
  },
}

export default function DemoPage() {
  return (
    <>
      <HeroHeader />
      <main className="bg-background pt-24">
        <section className="border-b border-dashed py-16 md:py-20">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-dashed bg-muted/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <PlayCircle className="size-4" weight="bold" />
              Product demos
            </span>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold md:text-5xl">See FieldMid in action</h1>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Quick videos for platform, CLI, and mobile. Add or replace the files in public when you want to update demos.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-6 px-6">
            {demoVideos.map((video) => (
              <article key={video.title} className="rounded-none border border-dashed bg-card p-4 md:p-6">
                <h2 className="text-2xl font-semibold">{video.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground md:text-base">{video.description}</p>
                <div className="mt-5 overflow-hidden rounded-sm border border-dashed bg-black/90">
                  <video className="aspect-video w-full" controls preload="metadata" playsInline>
                    {video.sources.map((source) => (
                      <source key={source} src={source} type="video/mp4" />
                    ))}
                    Your browser does not support the video tag.
                  </video>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  )
}
