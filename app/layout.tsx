import { Inter } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://fieldmid.com"),
  title: {
    default: "FieldMid | Offline-First Field Incident Reporting",
    template: "%s | FieldMid",
  },
  description:
    "FieldMid helps field teams report incidents offline, capture media evidence, and sync operations data securely when connectivity returns.",
  keywords: [
    "offline incident reporting",
    "field operations",
    "safety compliance",
    "supabase",
    "powersync",
    "react native",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "FieldMid | Offline-First Field Incident Reporting",
    description:
      "Capture incidents and media in low-connectivity environments with role-based workflows for workers, supervisors, and admins.",
    siteName: "FieldMid",
  },
  twitter: {
    card: "summary_large_image",
    title: "FieldMid | Offline-First Field Incident Reporting",
    description:
      "Offline-ready incident reporting for field teams with realtime sync, escalation, and compliance visibility.",
  },
  icons: {
    shortcut: [{ url: "/web/favicon.ico" }],
    icon: [
      { url: "/web/favicon.ico" },
      { url: "/web/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/web/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/web/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", "font-sans", inter.variable)}
    >
      <body className="min-h-screen">
        <ThemeProvider>
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
