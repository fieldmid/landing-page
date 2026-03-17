import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: 18 March 2026</p>

      <div className="mt-8 space-y-6 text-sm leading-6 text-muted-foreground">
        <section className="space-y-2">
          <h2 className="text-lg font-medium text-foreground">Use of Service</h2>
          <p>
            FieldMid is provided for operational incident reporting and team coordination. You agree to use it only
            for lawful business purposes.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-foreground">Accounts and Access</h2>
          <p>
            Access is role-based and organization-scoped. You are responsible for keeping account credentials secure.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-foreground">Service Availability</h2>
          <p>
            We aim for reliable service but do not guarantee uninterrupted availability. Planned changes may update
            functionality over time.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-foreground">Limitation</h2>
          <p>
            The service is provided as-is for hackathon and project use. Each organization remains responsible for
            operational decisions made using platform data.
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
