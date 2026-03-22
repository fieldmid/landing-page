"use client"

import { useState } from 'react'
import { TerminalIcon, DownloadSimpleIcon, CopyIcon, CheckIcon } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const INSTALL_COMMAND = 'curl -fsSL https://fieldmid.com/install.sh | sh'
const CARGO_COMMAND = 'cargo install --git https://github.com/fieldmid/rust-edge-repo.git'

export default function CliDownloadSection() {
    const [copiedMain, setCopiedMain] = useState(false)
    const [copiedCargo, setCopiedCargo] = useState(false)

    const copyToClipboard = async (text: string, setter: (v: boolean) => void) => {
        try {
            await navigator.clipboard.writeText(text)
            setter(true)
            setTimeout(() => setter(false), 1800)
        } catch {
            setter(false)
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

                    <div className="mb-4 w-fit rounded-none border border-dashed bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">
                        Note: Content below was added after 10:59 PM today.
                    </div>

                    <div className="mb-4 w-fit rounded-none border border-dashed bg-muted/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        CLI is in development
                    </div>

                    <h2 className="text-balance text-3xl font-semibold md:text-4xl">Install the FieldMid CLI</h2>
                    <p className="mt-3 max-w-3xl text-muted-foreground">
                        Monitor incidents, approve join requests, and run diagnostics from any Linux terminal. The CLI syncs data locally via PowerSync for offline-first access.
                    </p>

                    <div className="mt-8 space-y-4">
                        <div className="rounded-none border border-dashed bg-background p-4 md:p-5">
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Option 1 — One-line install</p>
                                <button
                                    onClick={() => copyToClipboard(INSTALL_COMMAND, setCopiedMain)}
                                    className="inline-flex items-center gap-1.5 rounded-md border border-dashed bg-muted/40 px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
                                >
                                    {copiedMain ? <CheckIcon weight="bold" className="size-3" /> : <CopyIcon weight="bold" className="size-3" />}
                                    {copiedMain ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                            <code className="mt-2 block overflow-x-auto text-sm text-foreground">{INSTALL_COMMAND}</code>
                        </div>

                        <div className="rounded-none border border-dashed bg-background p-4 md:p-5">
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Option 2 — Build from source</p>
                                <button
                                    onClick={() => copyToClipboard(CARGO_COMMAND, setCopiedCargo)}
                                    className="inline-flex items-center gap-1.5 rounded-md border border-dashed bg-muted/40 px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground"
                                >
                                    {copiedCargo ? <CheckIcon weight="bold" className="size-3" /> : <CopyIcon weight="bold" className="size-3" />}
                                    {copiedCargo ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                            <code className="mt-2 block overflow-x-auto text-sm text-foreground">{CARGO_COMMAND}</code>
                        </div>
                    </div>

                    <div className="mt-8 rounded-none border border-dashed bg-muted/30 p-4 md:p-5">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">After install</p>
                        <div className="space-y-1 font-mono text-sm text-muted-foreground">
                            <p><span className="text-foreground">fieldmid login</span>              <span className="text-muted-foreground/70"># Authenticate via browser</span></p>
                            <p><span className="text-foreground">fieldmid</span>                    <span className="text-muted-foreground/70"># Start the edge daemon (TUI)</span></p>
                            <p><span className="text-foreground">fieldmid latest-incidents</span>   <span className="text-muted-foreground/70"># View synced incidents</span></p>
                            <p><span className="text-foreground">fieldmid requests</span>           <span className="text-muted-foreground/70"># Approve/reject join requests</span></p>
                            <p><span className="text-foreground">fieldmid doctor</span>             <span className="text-muted-foreground/70"># Diagnose connectivity</span></p>
                        </div>
                    </div>

                    <div className="mt-8 rounded-none border border-dashed bg-background p-4 md:p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">CLI Screenshot</p>
                        <p className="mt-2 text-sm text-muted-foreground">Latest visual preview of the CLI interface.</p>
                        <div className="mt-4 overflow-hidden rounded-sm border border-dashed bg-black/90">
                            <Image
                                src="/cli.png"
                                alt="FieldMid CLI screenshot"
                                width={1366}
                                height={768}
                                className="h-auto w-full"
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Button size="lg" className="px-5 text-base" onClick={() => copyToClipboard(INSTALL_COMMAND, setCopiedMain)}>
                            <DownloadSimpleIcon weight="bold" className="size-5" />
                            {copiedMain ? 'Copied!' : 'Copy install command'}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
