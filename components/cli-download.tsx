"use client"

import { useState } from 'react'
import { TerminalIcon, DownloadSimpleIcon } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

const INSTALL_COMMAND = 'curl -fsSL https://downloads.fieldmid.dev/install.sh | sh'

export default function CliDownloadSection() {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(INSTALL_COMMAND)
            setCopied(true)
            setTimeout(() => setCopied(false), 1800)
        } catch {
            setCopied(false)
        }
    }

    return (
        <section id="cli-download" className="bg-muted/30 py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative overflow-hidden rounded-none border border-dashed bg-card p-6 md:p-10">
                    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
                    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
                    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
                    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-dashed bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                        <TerminalIcon weight="bold" className="size-4" />
                        CLI for edge operators
                    </div>

                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">Download our CLI</h2>
                    <p className="mt-3 max-w-3xl text-muted-foreground">
                        Install the FieldMid CLI in one command for edge monitoring and offline workflows. The install endpoint can be switched when you are ready to publish binaries.
                    </p>

                    <div className="mt-6 rounded-none border border-dashed bg-background p-4 md:p-5">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Install command</p>
                        <code className="block overflow-x-auto text-sm text-foreground">{INSTALL_COMMAND}</code>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button size="lg" className="px-5 text-base" onClick={handleCopy}>
                            <DownloadSimpleIcon weight="bold" className="size-5" />
                            {copied ? 'Copied!' : 'Copy install command'}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
