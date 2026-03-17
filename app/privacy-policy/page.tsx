import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: 18 March 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-6 text-muted-foreground">
        <section className="space-y-2">
          <h2 className="text-lg font-medium text-foreground">What We Collect</h2>
          <p>
            We collect account details, incident reports, and media attachments you submit in the app to operate
            FieldMid services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-foreground">How We Use Data</h2>
          <p>
            Data is used to provide incident tracking, role-based access, notifications, and operational reporting.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-foreground">Storage and Security</h2>
          <p>
            We store data on managed infrastructure and apply authentication, authorization, and access controls to
            protect organizational data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-foreground">Contact</h2>
          <p>
            For privacy requests, contact your organization administrator or the project maintainers through the
            contact page.
          </p>
        </section>
      </div>

      <div className="mt-10">
        <Link href="/" className="text-sm font-medium text-primary hover:underline">
          Back to home
        </Link>
      </div>
    </main>
  )
}
