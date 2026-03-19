"use client"

import { cn } from '@/lib/utils'

export function FieldMidText({ className }: { className?: string }) {
    return (
        <span className={cn('font-serif lowercase tracking-tight', className)}>fieldmid</span>
    )
}